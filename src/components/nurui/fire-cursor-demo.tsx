import React from "react";
import FireCursor from "@/components/nurui/fire-cursor";

const FireCursorDemo = () => {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <FireCursor />
    </>
  );
};

export default FireCursorDemo;
