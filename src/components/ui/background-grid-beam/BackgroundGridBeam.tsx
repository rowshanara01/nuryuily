import React from "react";
import { GridBeam } from "./GridBeam";

interface IProps {
  children: React.ReactNode;
}

const BackgroundGridBeam: React.FC<IProps> = ({ children }) => {
  return (
    <div className="bg-grid-black/[0.10] dark:bg-grid-white/[0.05]">
      <GridBeam>{children}</GridBeam>
    </div>
  );
};

export default BackgroundGridBeam;
