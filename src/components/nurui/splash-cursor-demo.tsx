import React from "react";
import SplashCursor from "@/components/nurui/splash-cursor";

const SplashCursorDemo = () => {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <SplashCursor />
    </>
  );
};

export default SplashCursorDemo;
