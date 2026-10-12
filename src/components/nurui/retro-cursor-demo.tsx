"use client";
import { RetroCursor } from "@/components/nurui/retro-cursor";
import { useMousePosition } from "@/utils/use-mouse-position";

const RetroCursorDemo = () => {
  const mousePosition = useMousePosition();
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <RetroCursor position={mousePosition} />{" "}
    </>
  );
};

export default RetroCursorDemo;
