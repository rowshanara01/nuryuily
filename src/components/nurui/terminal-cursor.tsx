"use client";
import React, { useEffect, useRef } from "react";

const TerminalCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$@";

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: CodeChar[] = [];

    class CodeChar {
      x: number;
      y: number;
      alpha: number;
      char: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.alpha = 1;
        this.char = chars[Math.floor(Math.random() * chars.length)];
      }

      update() {
        this.y -= 1;
        this.alpha -= 0.02;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 255, 0, ${this.alpha})`;
        ctx.font = "14px monospace";
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }
      requestAnimationFrame(animate);
    };
    animate();

    const onMove = (e: MouseEvent) => {
      for (let i = 0; i < 2; i++) {
        particles.push(new CodeChar(e.clientX, e.clientY));
      }
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default TerminalCursor;