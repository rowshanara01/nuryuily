"use client";

import type React from "react";
import { useMemo, type HTMLAttributes } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface JumpsBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  speed?: number;
  color?: string;
  height?: number;
  line?: number;
}

const WarpLine = ({
  angle,
  delay,
  color,
  height,
  duration,
}: {
  angle: number;
  delay: number;
  color: string;
  height: number;
  duration: number;
}) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        transformOrigin: "0 50%",
        transform: `rotate(${angle}deg)`,
        width: "0px",
        height: `${height}px`,
        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
      }}
      initial={{
        width: "0px",
        opacity: 0,
      }}
      animate={{
        width: "200vw",
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeOut",
      }}
    />
  );
};

export const JumpsBackground: React.FC<JumpsBackgroundProps> = ({
  children,
  className,
  speed = 1,
  height = 1,
  color = "#3ca2fa",
  line = 50,
  ...props
}) => {
  const warpLines = useMemo(() => {
    return Array.from({ length: line }, (_, i) => ({
      id: i,
      angle: (360 / line) * i + Math.random(),
      delay: Math.random() * speed * 2,
      duration: speed * 2 + Math.random(),
    }));
  }, [speed, line]);

  return (
    <div className={cn("relative w-full h-full", className)} {...props}>
      {warpLines.map((line) => (
        <WarpLine
          key={`line-${line.id}`}
          angle={line.angle}
          delay={line.delay}
          duration={line.duration}
          color={color}
          height={height}
        />
      ))}
      <div className="relative z-10 p-8">{children}</div>
    </div>
  );
};
