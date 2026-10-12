import React from "react";
import { FaRocket } from "react-icons/fa6";
import ShinyCard from "@/components/nurui/shiny-card";

export default function ShinyCardDemo() {
  return (
    <div className="p-10">
      {data.map((feature, index) => (
        <ShinyCard
          key={index}
          featureName={feature.featureName}
          featureItems={feature.featureItems}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}

const data = [
  {
    featureName: "Fast Performance",
    featureItems: [
      "Optimized for speed",
      "Low latency",
      "Lightweight and efficient",
    ],
    icon: <FaRocket />,
  },
];
