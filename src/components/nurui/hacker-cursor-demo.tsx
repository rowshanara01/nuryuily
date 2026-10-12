import HackerCursor from "@/components/nurui/hacker-cursor";

export default function HackerCursorDemo() {
  return (
    <>
      <p className="text-3xl text-center pt-4 text-[#3ca2fa] font-bold">
        Move cursor to see the effect.
      </p>
      <HackerCursor trailColor="#FF0077" dotSize={6} fadeDuration={700} />
    </>
  );
}
