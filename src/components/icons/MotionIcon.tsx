import { cn } from "@/lib/utils";
import React from "react";

const MotionIcon = ({
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
      x="0px"
      y="0px"
      width={reSize ? "80px" : "75px"}
      height={reSize ? "80px" : "75px"}
      viewBox="0 0 48 48"
      className={cn(isAnimation && "social-icon-animation", className)}
    >
      <path fill="#05F" d="M14.4 32H24v9.6L14.4 32Z" />
      <path
        fill="#0AF"
        d="M14.4 22.4H24V32h-9.6v-9.6zm9.6 0 9.6 9.6H24v-9.6z"
      />
      <path fill="#8DF" d="M24 12.8h9.6v9.6H24v-9.6zm-9.6 0H24v9.6l-9.6-9.6z" />
    </svg>
  );
};

export default MotionIcon;
