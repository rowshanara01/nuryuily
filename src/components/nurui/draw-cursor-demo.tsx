import DrawCursor from "@/components/nurui/draw-cursor";

export function DrawCursorDemo() {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <DrawCursor
        type="drawAlways"
        strokeColor="#80eeb4"
        strokeWidth={10}
        followEffect={true}
      />
    </>
  );
}
