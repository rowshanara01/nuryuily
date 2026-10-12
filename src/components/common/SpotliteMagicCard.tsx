"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

type MagicCardProps = {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  className?: string;
  children?: React.ReactNode;
  isRecommended?: boolean;
};

export default function SpotliteMagicCard({
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  className = "",
  children,
  isRecommended,
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  };

  const bg = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(${gradientSize}px circle at ${x}px ${y}px, ${gradientColor}, transparent 100%)`,
  );

  return (
    <div className={isRecommended ? "relative mt-10 md:mt-0" : ""}>
      {isRecommended ? (
        <div
          className={
            "bg-[var(--glass-color-4)] dark:bg-[var(--white-color)] h-14 w-full rounded-t-2xl absolute -top-9 capitalize text-center py-2 text-[var(--white-color)] dark:text-[var(--black-color)] font-medium"
          }
        >
          Most Popular
        </div>
      ) : null}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          `group relative overflow-hidden rounded-2xl ${
            isRecommended
              ? "border border-[var(--white-color)]"
              : "border border-[var(--border-color)]"
          }`,
          className,
        )}
      >
        <div className="relative z-10">{children}</div>
        <motion.div
          style={{ background: bg, opacity: gradientOpacity }}
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}
