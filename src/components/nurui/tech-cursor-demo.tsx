import React from "react";
import TechCursor from "@/components/nurui/tech-cursor";

const TechCursorDemo = () => {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <TechCursor />
    </>
  );
};

export default TechCursorDemo;
