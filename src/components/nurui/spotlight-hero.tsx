"use client";
import { Leaf, Trees, Mountain, Bird } from "lucide-react";
import { Button } from "@/components/nurui/button";
import { useEffect, useState } from "react";

export default function SpotLightHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0B1F0B] rounded-2xl text-green-50">
      {/* Magical forest mist effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(134, 239, 172, 0.15), transparent 80%)`,
        }}
      />

      {/* Enchanted forest decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vine-like borders */}
        <div className="absolute left-0 top-0 h-32 w-32">
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-green-600/40 to-transparent" />
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-green-600/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 h-32 w-32">
          <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-green-600/40 to-transparent" />
          <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-l from-green-600/40 to-transparent" />
        </div>

        {/* Mystical forest patterns */}
        <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-gradient-to-br from-green-900/20 via-green-800/10 to-transparent" />
        <div className="absolute bottom-8 right-8 h-64 w-64 rounded-full bg-gradient-to-tl from-green-900/20 via-green-800/10 to-transparent" />
      </div>

      <div className="container relative flex max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center">
        {/* Profile Image with enchanted border */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-600 via-yellow-500/50 to-green-600 opacity-75 blur-md" />
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-green-700" />
        </div>

        <div className="space-y-2">
          <h1 className="bg-gradient-to-r from-green-300 via-yellow-200/90 to-green-300 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl">
            Forest Keeper
          </h1>
          <p className="text-xl text-green-400">
            Guardian of the Digital Wilds
          </p>
        </div>

        <p className="max-w-[600px] text-green-200/80 md:text-lg">
          Weaving ancient forest magic into digital realms. Crafting enchanted
          experiences through the wisdom of the ancient woods.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Nature-themed magical buttons */}
          <Button
            variant="outline"
            size="icon"
            className="group border-green-800/50 bg-green-900/30 text-green-400 backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-800/40 hover:text-green-200"
          >
            <Trees className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="sr-only">Ancient Grove</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="group border-green-800/50 bg-green-900/30 text-green-400 backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-800/40 hover:text-green-200"
          >
            <Leaf className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="sr-only">Nature&apos;s Wisdom</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="group border-green-800/50 bg-green-900/30 text-green-400 backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-800/40 hover:text-green-200"
          >
            <Mountain className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="sr-only">Ancient Peaks</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="group border-green-800/50 bg-green-900/30 text-green-400 backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-800/40 hover:text-green-200"
          >
            <Bird className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="sr-only">Wild Messages</span>
          </Button>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            variant="outline"
            className="border-green-800/50 bg-green-900/30 text-green-400 backdrop-blur-sm transition-all hover:border-green-500 hover:bg-green-800/40 hover:text-green-200"
          >
            Enter the Grove
          </Button>
          <Button className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-600 text-green-50 transition-all hover:from-green-600 hover:to-green-500">
            <span className="relative z-10">Commune with Nature</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 transition-opacity hover:opacity-100" />
          </Button>
        </div>
      </div>
    </section>
  );
}
