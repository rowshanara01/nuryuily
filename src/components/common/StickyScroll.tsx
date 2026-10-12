"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    number: number;
    title: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = React.useMemo(
    () => [
      "linear-gradient(to bottom right, #06b6d4, #10b981)",
      "linear-gradient(to bottom right, #ec4899, #6366f1)",
      "linear-gradient(to bottom right, #f97316, #eab308)",
    ],
    [],
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      className="scroll-container container flex justify-between gap-20 h-[600px] p-4"
      ref={ref}
    >
      <div className="w-1/2">
        {content.map((item, index) => (
          <div
            key={item.number + index}
            className={`space-y-4 pt-16 w-full ${
              content.length !== index + 1 && "pb-6 border-b"
            }`}
          >
            <h2 className="text-3xl font-bold text-[var(--primary-color)]">
              {item.number}
            </h2>
            <h1 className="text-3xl font-semibold uppercase text-[var(--opacity-text-color)]">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10  w-1/2 h-[530px] overflow-hidden rounded-xl bg-white hidden lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
