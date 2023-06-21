import React, { useRef, useEffect } from 'react';

const BubbleEffect = () => {
  const canvasRef = useRef(null);
  const bubbles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBubble = (x, y) => {
      const bubble = {
        x,
        y,
        radius: Math.random() * 20 + 10,
        color: `rgba(135,150,255, 0.5)`,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 - 2,
        lifespan: 60,
      };

      bubbles.push(bubble);
    };

    const updateBubbles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];

        bubble.x += bubble.vx;
        bubble.y += bubble.vy;
        bubble.lifespan--;

        if (bubble.lifespan <= 0) {
          bubbles.splice(i, 1);
          i--;
        } else {
          ctx.beginPath();
          ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
          ctx.fillStyle = bubble.color;
          ctx.fill();
          ctx.closePath();
        }
      }
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      createBubble(x, y);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      updateBubbles();
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 50, left: 0 }} />;
};

export default BubbleEffect;
