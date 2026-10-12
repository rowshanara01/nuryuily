import React from "react";
import CodeCursor from "@/components/nurui/code-cursor";

const CodeCursorDemo = () => {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <CodeCursor />
    </>
  );
};

export default CodeCursorDemo;
