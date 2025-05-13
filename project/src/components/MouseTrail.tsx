import React, { useEffect, useRef } from 'react';

export const MouseTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', updateCanvasDimensions);
    updateCanvasDimensions();
    
    // Mouse trail effect
    const particles: {
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
    }[] = [];
    
    const colors = ['#00F0FF', '#9D00FF', '#00FF94'];
    
    let mouseX = 0;
    let mouseY = 0;
    let mouseRadius = 60;
    
    const createParticle = (x: number, y: number) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 3 + 1;
      const alpha = Math.random() * 0.6 + 0.2;
      const vx = (Math.random() - 0.5) * 2;
      const vy = (Math.random() - 0.5) * 2;
      
      particles.push({
        x,
        y,
        size,
        color,
        vx,
        vy,
        alpha,
      });
      
      // Limit particles to prevent performance issues
      if (particles.length > 100) {
        particles.shift();
      }
    };
    
    const updateParticles = () => {
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.01;
        
        if (p.alpha <= 0) {
          particles.splice(index, 1);
        }
      });
    };
    
    const renderParticles = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    const mouseMoveHandler = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Create 2-3 particles on mouse move
      for (let i = 0; i < 2; i++) {
        createParticle(
          mouseX + (Math.random() - 0.5) * 10,
          mouseY + (Math.random() - 0.5) * 10
        );
      }
    };
    
    const animate = () => {
      updateParticles();
      renderParticles();
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', mouseMoveHandler);
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.8 }}
    />
  );
};