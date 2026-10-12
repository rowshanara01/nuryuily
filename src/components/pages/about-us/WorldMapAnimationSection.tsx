"use client";
import SectionIntro from "@/components/common/SectionIntro";
import { WorldMap } from "@/components/ui/world-map/WorldMap";

export function WorldMapAnimationSection() {
  return (
    <section>
      <SectionIntro
        sectionName="Global Connectivity"
        sectionNameColor="text-black dark:text-[var(--secondary-color)] font-semibold"
        sectionNameStyle="bg-[var(--secondary-color)] dark:bg-[var(--secondary-color-3)] inline-block px-2 py-1"
        title={{
          normalWords: "Connecting Innovation",
          highLiteWords: "Across the Globe",
          highlightColor: "text-[var(--secondary-color)]",
        }}
      />
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            },
            end: {
              lat: 34.0522,
              lng: -118.2437,
            },
          },
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: -15.7975, lng: -47.8919 },
          },
          {
            start: { lat: -15.7975, lng: -47.8919 },
            end: { lat: 38.7223, lng: -9.1393 },
          },
          {
            start: { lat: 51.5074, lng: -0.1278 },
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: 43.1332, lng: 131.9113 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: -1.2921, lng: 36.8219 },
          },
          {
            start: { lat: 23.685, lng: 90.3563 },
            end: { lat: 51.5074, lng: -0.1278 },
          },
          {
            start: { lat: 23.685, lng: 90.3563 },
            end: { lat: 34.5439, lng: 69.1607 },
          },
          {
            start: { lat: 51.5074, lng: -0.1278 },
            end: { lat: 34.5439, lng: 69.1607 },
          },
          {
            start: { lat: 34.5439, lng: 69.1607 },
            end: { lat: 35.6895, lng: 139.6917 },
          },
        ]}
      />
    </section>
  );
}
