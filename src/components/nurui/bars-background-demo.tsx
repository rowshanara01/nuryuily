import { GradientBars } from "@/components/nurui/gradient-bars";

export default function BarsBackgroundDemo() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <GradientBars />
      <p className="text-[#3ca2fa] text-center text-4xl">Bars backgrounds :)</p>
    </div>
  );
}
