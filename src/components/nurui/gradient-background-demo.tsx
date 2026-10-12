import React from "react";
import { GradientBackground } from "@/components/nurui/gradient-background";

const GradientBackgroundDemo = () => {
  return (
    <div className="bg-background relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-xl">
      <p className="z-10 absolute text-center text-3xl font-semibold tracking-tighter whitespace-pre-wrap text-black md:text-7xl dark:text-white">
        Background
      </p>
      <GradientBackground />
    </div>
  );
};

export default GradientBackgroundDemo;
