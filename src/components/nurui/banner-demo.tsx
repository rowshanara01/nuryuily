import React from "react";
import { Banner } from "@/components/nurui/banner";

const BannerDemo = () => {
  return (
    <div className="p-10 w-full">
      <Banner
        variant="rainbow"
        className="shadow-lg bg-white dark:bg-transparent"
        rainbowColors={[
          "rgba(231,77,255,0.77)",
          "rgba(231,77,255,0.77)",
          "transparent",
          "rgba(231,77,255,0.77)",
          "transparent",
          "rgba(231,77,255,0.77)",
          "transparent",
        ]}
      >
        🚀 Project evolving more features soon!
      </Banner>
    </div>
  );
};

export default BannerDemo;
