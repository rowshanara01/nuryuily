"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

type DrawingType = "drawOnHold" | "drawAlways";

interface Props {
  strokeColor?: string;
  strokeWidth?: number;
  type: DrawingType;
  followEffect?: boolean;
}

const DrawCursor: React.FC<Props> = ({
  strokeColor = "#FF9900",
  strokeWidth = 10,
  type = "drawAlways",
  followEffect = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const isDrawing = useRef(false);
  const last = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const svgNS = "http://www.w3.org/2000/svg";

    // Create SVG
    const svg = document.createElementNS(svgNS, "svg");
    svg.style.position = "fixed";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100vw";
    svg.style.height = "100vh";
    svg.style.pointerEvents = "none";
    svg.style.zIndex = "9999"; // high z-index to be above everything
    document.body.appendChild(svg);
    svgRef.current = svg;

    // Resize handler to keep SVG full screen
    const resizeSvg = () => {
      svg.setAttribute("width", window.innerWidth.toString());
      svg.setAttribute("height", window.innerHeight.toString());
    };
    resizeSvg();
    window.addEventListener("resize", resizeSvg);

    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", `${x1}`);
      line.setAttribute("y1", `${y1}`);
      line.setAttribute("x2", `${x2}`);
      line.setAttribute("y2", `${y2}`);
      line.setAttribute("stroke", strokeColor);
      line.setAttribute("stroke-width", `${strokeWidth}`);
      line.setAttribute("stroke-linecap", "round");
      svg.appendChild(line);

      if (followEffect) {
        gsap.to(line, {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          onComplete: () => line.remove(),
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (type === "drawOnHold" && !isDrawing.current) return;

      const x = e.clientX;
      const y = e.clientY;

      if (last.current.x != null && last.current.y != null) {
        drawLine(last.current.x, last.current.y, x, y);
      }

      last.current = { x, y };
    };

    const onMouseDown = () => {
      if (type === "drawOnHold") isDrawing.current = true;
    };

    const onMouseUp = () => {
      if (type === "drawOnHold") isDrawing.current = false;
      last.current = { x: null, y: null }; // reset on mouse up
    };

    const onMouseLeave = () => {
      last.current = { x: null, y: null };
      isDrawing.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resizeSvg);
      svg.remove();
    };
  }, [strokeColor, strokeWidth, type, followEffect]);

  return <div ref={containerRef} className="relative overflow-hidden" />;
};

export default DrawCursor;
