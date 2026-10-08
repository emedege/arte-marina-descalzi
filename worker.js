// Sirve los archivos estáticos y añade soporte de "Range" a los vídeos (necesario para iPhone/Safari).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/videos/')) return env.ASSETS.fetch(request);
    const res = await env.ASSETS.fetch(new Request(url, { method: 'GET' }));
    if (!res.ok) return res;
    const buf = await res.arrayBuffer();
    const size = buf.byteLength;
    const headers = new Headers(res.headers);
    headers.set('Accept-Ranges', 'bytes');
    headers.set('Cache-Control', 'public, max-age=604800');
    const range = request.headers.get('Range');
    const m = range && /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!m) { headers.set('Content-Length', String(size)); return new Response(request.method === 'HEAD' ? null : buf, { status: 200, headers }); }
    let start = m[1] === '' ? size - Number(m[2]) : Number(m[1]);
    let end = m[1] === '' || m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1);
    if (start < 0 || start > end || start >= size) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
    headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
    headers.set('Content-Length', String(end - start + 1));
    return new Response(request.method === 'HEAD' ? null : buf.slice(start, end + 1), { status: 206, headers });
  },
};
