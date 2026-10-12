"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  alpha: number;
  update: () => void;
  draw: () => void;
}

const MatrixCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]); // useRef for persistent array

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Dot implements Particle {
      x: number;
      y: number;
      alpha: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.alpha = 1;
      }

      update() {
        this.alpha -= 0.02;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(0, 255, 0, ${this.alpha})`;
        ctx.fillRect(this.x, this.y, 4, 4);
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.update();
        p.draw();
        return p.alpha > 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const onMove = (e: MouseEvent) => {
      particles.current.push(new Dot(e.clientX, e.clientY));
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

export default MatrixCursor;
