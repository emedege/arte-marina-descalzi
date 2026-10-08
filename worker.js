// Worker de la web: una sola dirección canónica, HTTPS siempre y vídeos con soporte de "Range".
const PRODUCCION = 'marinadescalzi.es';

const redirige = (destino, codigo = 301) =>
  new Response(null, { status: codigo, headers: { Location: destino, 'Cache-Control': 'public, max-age=3600' } });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;

    // 1) Todas las variantes apuntan a https://marinadescalzi.es
    if (host === `www.${PRODUCCION}`) return redirige(`https://${PRODUCCION}${url.pathname}${url.search}`);
    if (host === PRODUCCION && url.protocol === 'http:') return redirige(`https://${PRODUCCION}${url.pathname}${url.search}`);

    // 2) La raíz va al idioma por defecto; /index.html y similares, a su ruta limpia
    if (url.pathname === '/') return redirige(`${url.origin}/es/${url.search}`);
    if (url.pathname.endsWith('/index.html')) return redirige(`${url.origin}${url.pathname.slice(0, -'index.html'.length)}${url.search}`);

    // Barra final siempre: /es/galeria -> /es/galeria/ (301)
    if (!url.pathname.endsWith('/') && !url.pathname.split('/').pop().includes('.')) return redirige(`${url.origin}${url.pathname}/${url.search}`);

    let res;
    if (url.pathname.startsWith('/videos/')) {
      res = await servirVideo(request, env, url);
    } else {
      res = await env.ASSETS.fetch(request);
    }

    // 3) Cabeceras de seguridad y de indexación
    const out = new Response(res.body, res);
    out.headers.set('X-Content-Type-Options', 'nosniff');
    out.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    if (host === PRODUCCION) {
      out.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    } else {
      // Direcciones de prueba (workers.dev): que Google no las indexe
      out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    }
    return out;
  },
};

async function servirVideo(request, env, url) {
  const res = await env.ASSETS.fetch(new Request(url, { method: 'GET' }));
  if (!res.ok) return res;
  const buf = await res.arrayBuffer();
  const size = buf.byteLength;
  const headers = new Headers(res.headers);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'public, max-age=604800');
  const range = request.headers.get('Range');
  const m = range && /^bytes=(\d*)-(\d*)$/.exec(range);
  if (!m) {
    headers.set('Content-Length', String(size));
    return new Response(request.method === 'HEAD' ? null : buf, { status: 200, headers });
  }
  const start = m[1] === '' ? size - Number(m[2]) : Number(m[1]);
  const end = m[1] === '' || m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1);
  if (start < 0 || start > end || start >= size) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(end - start + 1));
  return new Response(request.method === 'HEAD' ? null : buf.slice(start, end + 1), { status: 206, headers });
}
