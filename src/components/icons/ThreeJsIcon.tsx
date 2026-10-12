import { cn } from "@/lib/utils";
import React from "react";

const ThreeJsIcon = ({
  className,
  isAnimation = true,
  reSize,
}: {
  className?: string;
  isAnimation?: boolean;
  reSize?: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="square"
      strokeMiterlimit={10}
      x="0px"
      y="0px"
      width={reSize ? "80px" : "75px"}
      height={reSize ? "80px" : "75px"}
      viewBox="0 0 226.77 226.77"
      className={cn(
        isAnimation && "social-icon-animation",
        "text-black dark:text-white", // 👈 sets stroke color
        className,
      )}
    >
      <g
        transform="translate(8.964 4.2527)"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
        <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
        <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
        <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
        <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
        <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
      </g>
    </svg>
  );
};

export default ThreeJsIcon;
