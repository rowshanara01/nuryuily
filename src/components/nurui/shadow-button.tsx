import React from "react";
import { MdDone } from "react-icons/md";

const HoverShadowButton = ({ text }: { text: string }) => {
  return (
    <button className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group">
      <span className="flex items-center space-x-2">
        <MdDone className="text-purple-500 text-xl" />
        <span>{text}</span>
      </span>
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20" />
    </button>
  );
};

export default HoverShadowButton;
