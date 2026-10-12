import React from "react";
import TerminalCursor from "@/components/nurui/terminal-cursor";

const TerminalCursorDemo = () => {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <TerminalCursor />
    </>
  );
};

export default TerminalCursorDemo;
