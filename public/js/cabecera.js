/* Cabecera: al bajar, el logo desaparece y la firma se escribe de izquierda a derecha */
(function () {
  var header = document.querySelector('.site-header');
  var cv = document.querySelector('.firma');
  if (!header) return;
  var W = 480, H = 211, ctx, src, tm, out, od, raf = 0, listo = false;
  function dibuja() {
    if (!listo) return;
    cancelAnimationFrame(raf);
    var DUR = 1500, t0 = null, SOFT = 0.08;
    function frame(now) {
      if (t0 === null) t0 = now;
      var p = Math.min(1, (now - t0) / DUR), edge = p * (1 + SOFT);
      for (var k = 0; k < W * H; k++) {
        var a = tm[k] === 255 ? 0 : Math.min(1, Math.max(0, (edge - tm[k] / 254) / SOFT));
        od[k * 4 + 3] = src[k * 4 + 3] * a;
      }
      ctx.putImageData(out, 0, 0);
      if (p < 1) raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
  }
  if (cv) {
    var im = new Image();
    im.onload = function () {
      cv.width = W; cv.height = H; ctx = cv.getContext('2d');
      var c = document.createElement('canvas'); c.width = W; c.height = H;
      var x = c.getContext('2d'); x.drawImage(im, 0, 0, W, H);
      src = x.getImageData(0, 0, W, H).data;
      var minX = W, maxX = 0, i, px, py;
      for (i = 0; i < W * H; i++) if (src[i * 4 + 3] > 40) { px = i % W; if (px < minX) minX = px; if (px > maxX) maxX = px; }
      tm = new Uint8Array(W * H);
      for (i = 0; i < W * H; i++) {
        if (src[i * 4 + 3] > 40) {
          px = i % W; py = (i / W) | 0;
          // de izquierda a derecha, con un poco de inclinación como al escribir
          var t = ((px - minX) + py * 0.18) / ((maxX - minX) + H * 0.18);
          tm[i] = Math.min(254, Math.round(Math.max(0, t) * 254));
        } else tm[i] = 255;
      }
      out = ctx.createImageData(W, H); od = out.data;
      for (i = 0; i < W * H; i++) { od[i * 4] = 47; od[i * 4 + 1] = 125; od[i * 4 + 2] = 99; od[i * 4 + 3] = 0; }
      listo = true;
      if (header.classList.contains('compacto')) dibuja();
    };
    im.src = '/img/firma-emedege.svg';
  }
  var compacto = false, ticking = false;
  function revisa() {
    ticking = false;
    var y = window.scrollY;
    if (!compacto && y > 40) { compacto = true; header.classList.add('compacto'); dibuja(); }
    else if (compacto && y < 8) { compacto = false; header.classList.remove('compacto'); if (ctx) { cancelAnimationFrame(raf); ctx.clearRect(0, 0, W, H); } }
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(revisa); } }, { passive: true });
  revisa();
})();
