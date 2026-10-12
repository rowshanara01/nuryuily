import React from "react";
import { InfoCard } from "@/components/nurui/info-card";

const containerStyle: React.CSSProperties = {
  display: "flex",
  gap: 24,
  padding: 24,
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
  background: "none",
  fontFamily: "var(--font-family)",
  margin: 0,
};

const fileContainerStyle: React.CSSProperties = {
  width: 388,
  height: 378,
  borderRadius: "1em",
  position: "relative",
  overflow: "hidden",
  padding: 0,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "none",
  boxSizing: "border-box",
};

export const InfoCardDemo: React.FC = () => (
  <div className="py-24" style={containerStyle}>
    <div
      className="file-container"
      id="container1"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as string]: "#242424", // Unique for card 1
      }}
    >
      <InfoCard
        title="American English"
        description="Master American English efficiently with personalized lessons, cultural insights, and practical exercises."
        borderColor="#80eeb4"
        borderBgColor="#80eeb433"
        textColor="#fff"
        hoverTextColor="#80eeb4"
        effectBgColor="#80eeb466"
        contentPadding="14.3px 16px"
      />
    </div>
  </div>
);
