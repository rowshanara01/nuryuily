"use client";
import React, { useRef, useEffect } from "react";

interface CursorTrailProps {
  trailColor?: string;
  dotSize?: number;
  fadeDuration?: number;
  className?: string;
}

const HackerCursor: React.FC<CursorTrailProps> = ({
  trailColor = "#D0FBB6",
  dotSize = 4,
  fadeDuration = 600,
  className = "fixed inset-0 w-full h-full pointer-events-none z-50",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const hexToRGB = (hex: string) => {
      const num = parseInt(hex.replace("#", ""), 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      };
    };

    const { r, g, b } = hexToRGB(trailColor);

    const paintDot = (x: number, y: number) => {
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
      ctx.fillRect(x, y, dotSize, dotSize);
    };

    let lastTime = performance.now();

    const fade = () => {
      const now = performance.now();
      const delta = now - lastTime;
      lastTime = now;

      const fadeAlpha = delta / fadeDuration;

      ctx.fillStyle = `rgba(0, 0, 0, ${fadeAlpha})`;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      requestAnimationFrame(fade);
    };

    requestAnimationFrame(fade);

    const handleMouseMove = (e: MouseEvent) => {
      const x = Math.floor(e.clientX / dotSize) * dotSize;
      const y = Math.floor(e.clientY / dotSize) * dotSize;
      paintDot(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [trailColor, dotSize, fadeDuration]);

  return <canvas ref={canvasRef} className={className} />;
};

export default HackerCursor;
