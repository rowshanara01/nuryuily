import React from "react";
import GhostTrailCursor from "@/components/nurui/ghost-cursor";

const GhostCursorDemo = () => {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <GhostTrailCursor />
    </>
  );
};

export default GhostCursorDemo;
