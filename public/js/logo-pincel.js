/* El logo se pinta siguiendo los trazos: primero la M, luego la D y luego la G */
(function () {
  var boxes = document.querySelectorAll('.logo-draw');
  if (!boxes.length) return;
  var load = function (src) { return new Promise(function (ok, ko) { var im = new Image(); im.onload = function () { ok(im); }; im.onerror = ko; im.src = src; }); };
  Promise.all([load('/img/logo-mdg-limpio.webp'), load('/img/logo-mdg-tiempo.png')]).then(function (r) {
    var W = 322, H = 400;
    var grab = function (im) { var c = document.createElement('canvas'); c.width = W; c.height = H; var x = c.getContext('2d'); x.drawImage(im, 0, 0, W, H); return x.getImageData(0, 0, W, H).data; };
    var src = grab(r[0]), tm = grab(r[1]);
    boxes.forEach(function (box) {
      var cv = box.querySelector('.l-lienzo');
      if (!cv) return;
      var ctx = cv.getContext('2d');
      var out = ctx.createImageData(W, H), od = out.data;
      od.set(src);
      for (var i = 0; i < W * H; i++) od[i * 4 + 3] = 0;
      ctx.putImageData(out, 0, 0);
      box.classList.add('pintando');
      var DUR = 2800, SOFT = 0.035;
      function start() {
        var t0 = null;
        function frame(now) {
          if (t0 === null) t0 = now;
          var p = Math.min(1, (now - t0) / DUR);
          var edge = p * (1 + SOFT);
          for (var k = 0; k < W * H; k++) {
            var tt = tm[k * 4] / 254;
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
