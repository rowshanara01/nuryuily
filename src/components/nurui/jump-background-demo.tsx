import { JumpsBackground } from "@/components/nurui/jump-background";

export default function JumpBackgroundDemo() {
  return (
    <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden">
      <JumpsBackground color="#80eeb4" height={1.5} line={150}>
        <div className="flex h-full items-center justify-center">
          <p className="text-center text-3xl md:text-7xl font-semibold tracking-tighter whitespace-pre-wrap  text-[#80eeb4]">
            Jump Background
          </p>
        </div>
      </JumpsBackground>
    </div>
  );
}
