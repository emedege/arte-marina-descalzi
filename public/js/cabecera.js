/* Cabecera y firmas: al bajar, el logo se va y la firma se escribe de izquierda a derecha.
   También hay firmas sueltas por las páginas (canvas.firma-pagina) que se escriben al verlas. */
(function () {
  var header = document.querySelector('.site-header');
  var W = 640, H = 281, COL = [52, 128, 102];
  var src = null, tm = null, esperando = [];
  var firmas = document.querySelectorAll('canvas.firma, canvas.firma-pagina');
  if (!firmas.length && !header) return;

  function pinta(cv, dur) {
    if (cv._raf) cancelAnimationFrame(cv._raf);
    cv._inicio = true;
    cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d'), out = ctx.createImageData(W, H), od = out.data, i;
    var col = cv.getAttribute('data-color') ? cv.getAttribute('data-color').split(',').map(Number) : COL;
    for (i = 0; i < W * H; i++) { od[i * 4] = col[0]; od[i * 4 + 1] = col[1]; od[i * 4 + 2] = col[2]; }
    var t0 = null, SOFT = 0.08;
    function frame(now) {
      if (t0 === null) t0 = now;
      var p = Math.min(1, (now - t0) / dur), edge = p * (1 + SOFT);
      for (var k = 0; k < W * H; k++) {
        var a = tm[k] === 255 ? 0 : Math.min(1, Math.max(0, (edge - tm[k] / 254) / SOFT));
        od[k * 4 + 3] = src[k * 4 + 3] * a;
      }
      ctx.putImageData(out, 0, 0);
      if (p < 1) cv._raf = requestAnimationFrame(frame);
    }
    cv._raf = requestAnimationFrame(frame);
  }
  function limpia(cv) { if (cv._raf) cancelAnimationFrame(cv._raf); cv.getContext('2d').clearRect(0, 0, cv.width, cv.height); }

  var im = new Image();
  im.onload = function () {
    var c = document.createElement('canvas'); c.width = W; c.height = H;
    var x = c.getContext('2d'); x.drawImage(im, 0, 0, W, H);
    src = x.getImageData(0, 0, W, H).data;
    var minX = W, maxX = 0, i, px, py;
    for (i = 0; i < W * H; i++) if (src[i * 4 + 3] > 40) { px = i % W; if (px < minX) minX = px; if (px > maxX) maxX = px; }
    tm = new Uint8Array(W * H);
    for (i = 0; i < W * H; i++) {
      if (src[i * 4 + 3] > 40) {
        px = i % W; py = (i / W) | 0;
        var t = ((px - minX) + py * 0.18) / ((maxX - minX) + H * 0.18);
        tm[i] = Math.min(254, Math.round(Math.max(0, t) * 254));
      } else tm[i] = 255;
    }
    esperando.forEach(function (f) { f(); });
    esperando = [];
  };
  im.src = '/img/firma-emedege.svg';
  function cuando(f) { if (tm) f(); else esperando.push(f); }

  // Firmas sueltas: se escriben al llegar a ellas
  var sueltas = document.querySelectorAll('canvas.firma-pagina');
  if (sueltas.length) {
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) {
          io.unobserve(e.target);
          var cv = e.target, tras = cv.getAttribute('data-tras');
          cuando(function () {
            if (!tras) { pinta(cv, 1800); return; }
            // Se escribe 1 segundo después de que empiece la firma indicada
            var otra = document.querySelector(tras), espera = setInterval(function () {
              if (!otra || otra._inicio) { clearInterval(espera); setTimeout(function () { pinta(cv, 1500); }, 1000); }
            }, 80);
          });
        } });
    }, { threshold: 0.6 }) : null;
    sueltas.forEach(function (cv) { if (io) io.observe(cv); else cuando(function () { pinta(cv, 1800); }); });
  }

  // Cabecera
  if (header) {
    var cv = header.querySelector('canvas.firma');
    var compacto = false, ticking = false;
    var revisa = function () {
      ticking = false;
      var y = window.scrollY;
      if (!compacto && y > 40) {
        compacto = true; header.classList.add('compacto');
        if (cv && !header.hasAttribute('data-sin-firma')) cuando(function () { if (compacto) pinta(cv, 1500); });
      } else if (compacto && y < 8) {
        compacto = false; header.classList.remove('compacto'); if (cv) limpia(cv);
      }
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(revisa); } }, { passive: true });
    revisa();
  }
})();
