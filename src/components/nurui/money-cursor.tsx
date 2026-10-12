"use client";
import React, { useEffect, useRef } from "react";

const symbols = ["$", "💸", "🪙", "💵"];

class MoneyParticle {
  x: number;
  y: number;
  alpha: number;
  char: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.alpha = 1;
    this.char = symbols[Math.floor(Math.random() * symbols.length)];
  }

  update() {
    this.y -= 0.3;
    this.alpha -= 0.02;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(255, 255, 0, ${this.alpha})`;
    ctx.font = "18px sans-serif";
    ctx.fillText(this.char, this.x, this.y);
  }
}

const MoneyCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<MoneyParticle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = particlesRef.current;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) particles.splice(i, 1);
      }
      requestAnimationFrame(animate);
    };

    animate();

    const handleMove = (e: MouseEvent) => {
      for (let i = 0; i < 2; i++) {
        particles.push(new MoneyParticle(e.clientX, e.clientY));
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default MoneyCursor;