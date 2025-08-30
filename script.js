 (() => {
    const canvas = document.getElementById('bg-bubbles');
    const ctx = canvas.getContext('2d');

    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = 0, height = 0;

    function resize() {
      width = Math.floor(window.innerWidth);
      height = Math.floor(window.innerHeight);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    addEventListener('resize', resize);

    const particles = [];
    const MAX_PARTICLES = 450;

    const COLORS = [
      'rgba(0, 255, 255, 0.9)',
      'rgba(160, 240, 255, 0.9)',
      'rgba(255, 255, 255, 0.95)'
    ];

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function spawn(x, y, burst = false) {
      const count = burst ? 14 : 6;
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) particles.shift();
        const r = rand(2, burst ? 14 : 10);
        const angle = rand(0, Math.PI * 2);
        const speed = burst ? rand(0.2, 1.4) : rand(0.15, 0.8);
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - rand(0.1, 0.6),
          r,
          life: 1,
          decay: rand(0.005, 0.02),
          color: COLORS[(Math.random() * COLORS.length) | 0]
        });
      }
    }

    let ambientTimer = 0;

    const cursor = { x: width / 2, y: height / 2, moved: false };
    addEventListener('mousemove', (e) => {
      cursor.x = e.clientX; cursor.y = e.clientY; cursor.moved = true;
      spawn(cursor.x, cursor.y, true);
    }, { passive: true });

    addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      if (t) {
        cursor.x = t.clientX; cursor.y = t.clientY; cursor.moved = true;
        spawn(cursor.x, cursor.y, true);
      }
    }, { passive: true });

    function drawBubble(p) {
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 0.35);
      gradient.addColorStop(0, p.color);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalCompositeOperation = 'lighter';
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }

    function drawCursorBall() {
      const r = 10;
      const gradient = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, r * 2);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1, 'rgba(226, 255, 255, 1)');
      ctx.globalCompositeOperation = 'lighter';
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(cursor.x, cursor.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      ambientTimer += 1;
      if (ambientTimer > 6) {
        ambientTimer = 0;
        spawn(rand(0, width), rand(height * 0.6, height), false);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vx *= 0.995;
        p.vy += -0.003;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.x += Math.sin((1 - p.life) * 20) * 0.08;
        if (p.life <= 0 || p.y + p.r < -40 || p.x + p.r < -40 || p.x - p.r > width + 40) {
          particles.splice(i, 1);
          continue;
        }
        const originalR = p.r;
        p.r = Math.max(0, originalR * (0.7 + p.life * 0.3));
        drawBubble(p);
        p.r = originalR;
      }

      if (cursor.moved) {
        drawCursorBall();
      }

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  })();