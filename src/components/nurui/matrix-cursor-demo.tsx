import React from "react";
import MatrixCursor from "@/components/nurui/matrix-cursor";

const MatrixCursorDemo = () => {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <MatrixCursor />
    </>
  );
};

export default MatrixCursorDemo;
