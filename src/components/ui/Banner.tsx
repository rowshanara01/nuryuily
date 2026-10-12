"use client";
import React from "react";
import { Banner as UIBanner } from "@/components/nurui/banner";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Banner = () => {
  const pathName = usePathname();
  const { theme } = useTheme();

  if (pathName.includes("docs") || pathName.includes("preview")) return null;
  
  const rainbowColors =
    theme === "light"
      ? [
          "rgba(60, 162, 250, 10)",
          "rgba(60, 162, 250, 10)",
          "transparent",
          "rgba(60, 162, 250, 10)",
          "transparent",
          "rgba(60, 162, 250, 10)",
          "transparent",
        ]
      : [
          "rgba(60, 162, 250, 0.5)",
          "rgba(60, 162, 250, 0.5)",
          "transparent",
          "rgba(60, 162, 250, 0.5)",
          "transparent",
          "rgba(60, 162, 250, 0.5)",
          "transparent",
        ];
  return (
    <UIBanner
      id="ui-banner"
      className="shadow-lg shadow-[#3ca2fa]/5 relative bg-white dark:bg-transparent"
      variant="rainbow"
      xColor="#3ca2fa"
      rainbowColors={rainbowColors}
    >
      {/* <Link
        href="/docs/gradient-hero"
        className="text-white font-semibold hidden md:block"
      >
        🚀 Added 20+ modern animated UI components to enhance your projects.
      </Link> */}
      <div className="text-black dark:text-white font-semibold hidden md:block">
        🚀 This project is still evolving some features and pages are
        incomplete. Updates are coming soon!
      </div>{" "}
      {/* <Link
        href="/docs/gradient-hero"
        className="text-white font-semibold block md:hidden"
      >
        🚀 20+ modern animated components.
      </Link> */}
      <div className="text-black dark:text-white font-semibold block md:hidden">
        🚀 Project evolving more features soon!
      </div>
    </UIBanner>
  );
};

export default Banner;
