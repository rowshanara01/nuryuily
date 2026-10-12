import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGradientButton from "./AnimatedGradientButton";

interface IProps {
  title: string;
  textGradient?: string;
  borderGradient?: string;
  href: string;
}

const AnimatedGradientText: React.FC<IProps> = ({
  href,
  title,
  textGradient = "bg-gradient-to-r from-[var(--secondary-color)] via-[var(--primary-color)] to-[var(--secondary-color)]",
  borderGradient = "bg-gradient-to-r from-[#80EEB4]/60 via-[#3CA2FA]/60 to-[#80EEB4]/60",
}) => {
  return (
    <AnimatedGradientButton href={href} borderGradient={borderGradient}>
      🎉{" "}
      <hr className="mx-2 h-4 w-[1px] shrink-0 bg-[var(--black-color)] dark:bg-[var(--white-color)]" />{" "}
      <span
        className={cn(
          `inline animate-gradient ${textGradient} bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent font-semibold`,
        )}
      >
        {title}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </AnimatedGradientButton>
  );
};

export default AnimatedGradientText;
