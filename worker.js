// Worker de la web: una sola dirección canónica, HTTPS siempre y vídeos con soporte de "Range".
const PRODUCCION = 'marinadescalzi.es';

const redirige = (destino, codigo = 301) =>
  new Response(null, { status: codigo, headers: { Location: destino, 'Cache-Control': 'public, max-age=3600' } });

// Devuelve la URL canónica si la pedida es distinta (en un solo salto), o null si ya es la correcta.
// https://marinadescalzi.es/es/...  (sin www, con https, con barra final, sin index.html)
export function canonica(url, dominioActivo) {
  let host = url.hostname;
  let proto = url.protocol;
  if (host === PRODUCCION || host === `www.${PRODUCCION}` || (dominioActivo && host.endsWith('.workers.dev'))) {
    host = PRODUCCION;
    proto = 'https:';
  }
  let ruta = url.pathname.replace(/\/{2,}/g, '/');
  if (ruta.endsWith('/index.html')) ruta = ruta.slice(0, -'index.html'.length);
  if (ruta === '/') ruta = '/es/';
  else if (!ruta.endsWith('/') && !ruta.split('/').pop().includes('.')) ruta += '/';
  const puerto = host === url.hostname && url.port ? `:${url.port}` : '';
  const destino = `${proto}//${host}${puerto}${ruta}${url.search}`;
  return destino === `${url.protocol}//${url.host}${url.pathname}${url.search}` ? null : destino;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;

    // 1) Una sola redirección (sin cadenas) hacia la dirección canónica
    const destino = canonica(url, env.DOMINIO_ACTIVO === 'si');
    if (destino !== null) return redirige(destino);

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
