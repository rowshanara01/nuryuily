"use client";
import React, { useEffect, useState } from "react";
import GradientText from "@/components/nurui/gradient-text";

const UserByCompanies = () => {
  const [isBannerOpen, setIsBannerOpen] = useState<boolean | null>(null);

  const getBannerStatus = () => {
    const bannerClosed = localStorage.getItem("nd-banner-ui-banner") === "true";
    setIsBannerOpen(!bannerClosed);
  };

  useEffect(() => {
    // Initial check
    getBannerStatus();

    // Listen for the custom event
    const handler = () => getBannerStatus();
    window.addEventListener("banner-status-changed", handler);

    return () => window.removeEventListener("banner-status-changed", handler);
  }, []);

  if (isBannerOpen === null) return null;

  return (
    <div
      className={`${
        isBannerOpen ? "pt-24" : "pt-36"
      } hidden md:flex items-center gap-2`}
    >
      <GradientText
        colors={["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"]}
        animationSpeed={3}
        showBorder={false}
        className="text-3xl font-bold"
      >
        Used by 50+ Companies
      </GradientText>
    </div>
  );
};

export default UserByCompanies;
