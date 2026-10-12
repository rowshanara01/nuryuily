"use client";
import { useEffect, useRef } from "react";

interface BaseParticle {
  element: HTMLElement | SVGSVGElement;
  left: number;
  size: number;
  top: number;
}

interface BaseParticleOptions {
  particle?: string | string[]; // Adjusted to handle single or multiple particles
  size?: number;
}

interface CoolParticle extends BaseParticle {
  direction: number;
  speedHorz: number;
  speedUp: number;
  spinSpeed: number;
  spinVal: number;
}

interface CoolParticleOptions extends BaseParticleOptions {
  particleCount?: number;
  speedHorz?: number;
  speedUp?: number;
}

let instanceCounter = 0;

const getContainer = (): HTMLElement => {
  const id = "_coolMode_effect";
  const existingContainer = document.getElementById(id);

  if (existingContainer) {
    return existingContainer;
  }

  const container = document.createElement("div");
  container.setAttribute("id", id);
  container.style.cssText =
    "overflow:hidden; position:fixed; height:100%; top:0; left:0; right:0; bottom:0; pointer-events:none; z-index:2147483647";

  document.body.appendChild(container);
  return container;
};

const applyParticleEffect = (
  element: HTMLElement,
  options?: CoolParticleOptions
): (() => void) => {
  instanceCounter++;
  const defaultParticle = "circle";
  const particleType = Array.isArray(options?.particle)
    ? options?.particle
    : [options?.particle || defaultParticle]; // Handle array of particles
  const sizes = [15, 20, 25, 35, 45];
  const limit = 45;

  let particles: CoolParticle[] = [];
  let autoAddParticle = false;
  let mouseX = 0;
  let mouseY = 0;
  const container = getContainer();

  const generateParticle = () => {
    const size =
      options?.size || sizes[Math.floor(Math.random() * sizes.length)];
    const speedHorz = options?.speedHorz || Math.random() * 10;
    const speedUp = options?.speedUp || Math.random() * 25;
    const spinVal = Math.random() * 360;
    const spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
    const top = mouseY - size / 2;
    const left = mouseX - size / 2;
    const direction = Math.random() <= 0.5 ? -1 : 1;

    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.transform = `translate3d(${left}px, ${top}px, 0px) rotate(${spinVal}deg)`;

    const selectedParticleType =
      particleType[Math.floor(Math.random() * particleType.length)];

    if (selectedParticleType === "circle") {
      const svgNS = "http://www.w3.org/2000/svg";
      const circleSVG = document.createElementNS(svgNS, "svg");
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", (size / 2).toString());
      circle.setAttribute("cy", (size / 2).toString());
      circle.setAttribute("r", (size / 2).toString());
      circle.setAttribute("fill", `hsl(${Math.random() * 360}, 70%, 50%)`);
      circleSVG.appendChild(circle);
      circleSVG.setAttribute("width", size.toString());
      circleSVG.setAttribute("height", size.toString());
      particle.appendChild(circleSVG);
    } else {
      particle.innerHTML = `<img src="${selectedParticleType}" width="${size}" height="${size}" style="border-radius: 50%">`;
    }

    container.appendChild(particle);
    particles.push({
      direction,
      element: particle,
      left,
      size,
      speedHorz,
      speedUp,
      spinSpeed,
      spinVal,
      top,
    });
  };

  const refreshParticles = () => {
    particles.forEach((p) => {
      p.left -= p.speedHorz * p.direction;
      p.top -= p.speedUp;
      p.speedUp = Math.min(p.size, p.speedUp - 1);
      p.spinVal += p.spinSpeed;

      if (p.top >= window.innerHeight + p.size) {
        particles = particles.filter((o) => o !== p);
        p.element.remove();
      }

      p.element.style.cssText = `position:absolute; will-change:transform; top:${p.top}px; left:${p.left}px; transform:rotate(${p.spinVal}deg);`;
    });
  };

  let animationFrame: number;
  const loop = () => {
    if (autoAddParticle && particles.length < limit) generateParticle();
    refreshParticles();
    animationFrame = requestAnimationFrame(loop);
  };

  loop();
  const updateMousePosition = (e: MouseEvent | TouchEvent) => {
    if ("touches" in e) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    } else {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
  };

  const tapHandler = (e: MouseEvent | TouchEvent) => {
    updateMousePosition(e);
    autoAddParticle = true;
  };

  const disableAutoAddParticle = () => (autoAddParticle = false);

  element.addEventListener("mousemove", updateMousePosition, { passive: true });
  element.addEventListener("mousedown", tapHandler, { passive: true });
  element.addEventListener("mouseup", disableAutoAddParticle, {
    passive: true,
  });
  element.addEventListener("mouseleave", disableAutoAddParticle, {
    passive: true,
  });

  return () => {
    element.removeEventListener("mousemove", updateMousePosition);
    element.removeEventListener("mousedown", tapHandler);
    element.removeEventListener("mouseup", disableAutoAddParticle);
    element.removeEventListener("mouseleave", disableAutoAddParticle);
    cancelAnimationFrame(animationFrame);
    if (--instanceCounter === 0) container.remove();
  };
};

interface CoolParticleEffectProps {
  options?: CoolParticleOptions;
  children?: React.ReactNode;
  className?: string;
}

const CollMode: React.FC<CoolParticleEffectProps> = ({
  options,
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      return applyParticleEffect(containerRef.current, options);
    }
  }, [options]);

  return (
    <div ref={containerRef} className={`z-40 ${className}`}>
      {children}
    </div>
  );
};

export default CollMode;
