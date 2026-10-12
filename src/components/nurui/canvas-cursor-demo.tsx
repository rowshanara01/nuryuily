import React from "react";
import CanvasCursor from "@/components/nurui/canvas-cursor";

const CanvasCursorDemo = () => {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <CanvasCursor />
    </>
  );
};

export default CanvasCursorDemo;
