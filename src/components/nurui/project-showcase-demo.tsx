"use client";
import React from "react";
import { ProjectShowCase } from "@/components/nurui/project-showcase";

const ProjectShowCaseDemo = () => {
  function openInNewTab(link: string) {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1536px" }}
      >
        <ProjectShowCase
          testimonials={[
            {
              name: "Nurui",
              quote:
                'Nurui is a modern, cross-framework UI component library with CLI support for integrating responsive components.',
              designation: "Next.js Project",
              src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1751865129/og-image_sg2pmi.png",
              link: "https://nurui.vercel.app",
            },
            {
              name: "Libra",
              quote:
                "Libra is a minimal Library Management System built with React, TypeScript, and Redux Toolkit Query, allowing users to view, create, edit, delete, and borrow books without authentication or complex setup.",
              designation: "React.js Project",
              src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1751865496/Libra_lwshuz.png",
              link: "https://minimal-library-management-client.vercel.app",
            },
            {
              name: "Bookify",
              quote:
                "It is a book exchange web app that allows users to easily exchange single or multiple books with others.",
              designation: "Next.js Project",
              src: "https://res.cloudinary.com/dz1fy2tof/image/upload/v1751865698/bookify_fh6bfi.png",
              link: "https://bookify06.vercel.app/",
            },
          ]}
          colors={{
            name: "#3ca2fa",
          }}
          fontSizes={{
            name: "25px",
          }}
          spacing={{
            nameTop: "8",
            nameBottom: "2",
            lineHeight: "2",
          }}
          halomotButtonBackground="#3ca2fa33"
          halomotButtonTextColor="#000"
          halomotButtonOuterBorderRadius="10px"
          halomotButtonInnerBorderRadius="10px"
          halomotButtonHoverTextColor="#fff"
          onItemClick={openInNewTab}
        />
      </div>
    </div>
  );
};

export default ProjectShowCaseDemo;
