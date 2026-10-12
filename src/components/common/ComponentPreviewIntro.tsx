"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ComponentPreviewIntro = () => {
  const pathName = usePathname();
  const name = pathName.split("/");

  return (
    <h2 className="text-4xl font-bold pb-4 capitalize">
      {name[name.length - 1].split("-").join(" ")}
    </h2>
  );
};

export default ComponentPreviewIntro;
