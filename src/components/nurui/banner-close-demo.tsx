import React from "react";
import { Banner } from "@/components/nurui/banner";

const BannerCloseDemo = () => {
  return (
    <div className="p-10 w-full">
      <Banner
        id="banner-id"
        className="shadow-lg bg-white dark:bg-transparent"
        variant="rainbow"
      >
        🚀 Added 20+ modern animated UI components to enhance your projects.
      </Banner>
    </div>
  );
};

export default BannerCloseDemo;
