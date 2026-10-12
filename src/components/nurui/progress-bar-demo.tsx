"use client";
import { useEffect, useState } from "react";
import { ProgressBar } from "@/components/nurui/progress-bar";

export function ProgressBarDemo({ className }: { className?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressBar
      max={100}
      min={0}
      value={value}
      gaugePrimaryColor="#80eeb4"
      gaugeSecondaryColor="#80eeb44d"
      className={className}
    />
  );
}
