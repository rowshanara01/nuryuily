import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";
import "./styles/gradient-button.css";

interface GradientButtonProps {
  borderWidth?: number;
  colors?: string[];
  duration?: number;
  borderRadius?: number;
  blur?: number;
  className?: string;
  bgColor?: string;
  text?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  borderWidth = 2,
  colors = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#4B0082",
    "#EE82EE",
    "#FF0000",
  ],
  duration = 2500,
  borderRadius = 8,
  blur = 4,
  className,
  bgColor = "#000",
  text = "Zooooooooooom 🚀",
}) => {
  const gradientStyle = {
    "--allColors": colors.join(", "),
    "--duration": `${duration}ms`,
    "--borderWidth": `${borderWidth}px`,
    "--borderRadius": `${borderRadius}px`,
    "--blur": `${blur}px`,
    "--bgColor": bgColor,
  } as CSSProperties;

  return (
    <div className="inline-block">
      <button
        style={gradientStyle}
        className={cn(
          "relative flex items-center justify-center min-w-28 min-h-10 overflow-hidden rainbow-btn before:absolute before:-inset-[200%] animate-rainbow",
          className,
        )}
      >
        <span className="text-white btn-content inline-flex w-full h-full items-center justify-center px-4 py-2">
          {text}
        </span>
      </button>
    </div>
  );
};

export default GradientButton;
