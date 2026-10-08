/* El logo se pinta siguiendo los trazos: primero la M, luego la D y luego la G */
(function () {
  var boxes = document.querySelectorAll('.logo-draw');
  if (!boxes.length) return;
  var load = function (src) { return new Promise(function (ok, ko) { var im = new Image(); im.onload = function () { ok(im); }; im.onerror = ko; im.src = src; }); };
  Promise.all([load('/img/logo-mdg-anim.webp'), load('/img/logo-mdg-tiempo.png')]).then(function (r) {
    var W = r[0].naturalWidth, H = r[0].naturalHeight;
    var grab = function (im) { var c = document.createElement('canvas'); c.width = W; c.height = H; var x = c.getContext('2d'); x.drawImage(im, 0, 0, W, H); return x.getImageData(0, 0, W, H).data; };
    var src = grab(r[0]), tm = grab(r[1]);
    boxes.forEach(function (box) {
      var cv = box.querySelector('.l-lienzo');
      if (!cv) return;
      cv.width = W; cv.height = H;
      var ctx = cv.getContext('2d');
      var out = ctx.createImageData(W, H), od = out.data;
      od.set(src);
      for (var i = 0; i < W * H; i++) od[i * 4 + 3] = 0;
      ctx.putImageData(out, 0, 0);
      box.classList.add('pintando');
      var DUR = 2100, SOFT = 0.07;
      // Ruido de cerdas: el borde del pincel avanza irregular, con vetas
      var nz = new Float32Array(W * H);
      (function () {
        var cell = 6, gw = Math.ceil(W / cell) + 2, gh = Math.ceil(H / cell) + 2, g = new Float32Array(gw * gh), s = 7;
        for (var q = 0; q < g.length; q++) { s = (s * 16807) % 2147483647; g[q] = s / 2147483647; }
        for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
          var fx = x / cell, fy = y / (cell * 2.2), ix = fx | 0, iy = fy | 0, ax = fx - ix, ay = fy - iy;
          ax = ax * ax * (3 - 2 * ax); ay = ay * ay * (3 - 2 * ay);
          var a = g[iy * gw + ix], b = g[iy * gw + ix + 1], c = g[(iy + 1) * gw + ix], d = g[(iy + 1) * gw + ix + 1];
          var v = (a + (b - a) * ax) + ((c + (d - c) * ax) - (a + (b - a) * ax)) * ay;
          s = (s * 16807) % 2147483647;
          nz[y * W + x] = v * 0.8 + (s / 2147483647) * 0.2;
        }
      })();
      function start() {
        var t0 = null;
        function frame(now) {
          if (t0 === null) t0 = now;
          var p = Math.min(1, (now - t0) / DUR);
          var edge = p * (1.06 + SOFT);
          for (var k = 0; k < W * H; k++) {
            var tt = tm[k * 4] / 254 + nz[k] * 0.06;
            var a = tm[k * 4] === 255 ? 0 : Math.min(1, Math.max(0, (edge - tt) / SOFT));
            od[k * 4 + 3] = src[k * 4 + 3] * a;
          }
          ctx.putImageData(out, 0, 0);
          if (p < 1) requestAnimationFrame(frame); else box.classList.add('pintado');
        }
        requestAnimationFrame(frame);
      }
      if (box.hasAttribute('data-al-ver') && 'IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); start(); } }, { threshold: 0.5 });
        io.observe(box);
      } else { start(); }
    });
  }).catch(function () {});
})();
