import ResearchHero from "@/components/nurui/research-hero";
import { SparklesCore } from "@/components/nurui/sparkles";

export default function ResearchHeroDemo() {
  return (
    <section className="min-h-screen w-full rounded-2xl bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <ResearchHero />
      </div>
    </section>
  );
}
