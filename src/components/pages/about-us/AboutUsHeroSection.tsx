import React from "react";
import CollMode from "@/components/ui/cool-mode/CollMode";
import LinkWithProgress from "@/components/common/LinkWithProgress";

const features = [
  "One Command Setup",
  "Lightweight Codebase",
  "Responsive",
  "Customizable Component",
  "Open Source",
];

const particles = [
  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1747489777/icons8-tailwindcss-480_qnf2sy.png",
  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1751019213/CSS3_enijzz.png",
  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1747489474/atom_eieqee.png",
  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1747489870/icons8-javascript-480_nqbmlo.png",
  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1747489887/icons8-typescript-480_gxf8zq.png",
  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1747490019/icons8-sass-480_colnli.png",
  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1751018871/zdog_xc145m.png",
];

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 rounded-full bg-white"></div>
    <span>{text}</span>
  </div>
);

const AboutUsHeroSection = () => {
  return (
    <section className="bg-white dark:bg-[var(--glass-color)] lg:border border-[var(--border-color)] px-5 xl:px-0 pt-7 xl:pt-14 lg:mx-10 xl:mx-20 lg:mt-6 xl:mt-10 lg:rounded-2xl">
      <div className="max-w-4xl mx-auto text-center xl:mb-16 pb-7 xl:pb-0">
        <h3 className="text-[var(--primary-color)] text-xl font-medium">
          About us
        </h3>

        <h1
          className="text-3xl xl:text-5xl font-semibold mb-6"
          style={{ lineHeight: 1.2 }}
        >
          So how did nurui
          <span className="text-[var(--primary-color)]"> come to be?</span>
        </h1>

        <p className="xl:text-xl text-[var(--opacity-text-color)] dark:text-white/70 max-w-2xl mx-auto mb-6">
          Nurui was born from the vision of simplifying UI development for
          modern web applications. Our goal is to empower developers with
          high-quality, reusable components that speed up workflow, reduce
          repetitive tasks, and ensure consistency across projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </div>

        <CollMode options={{ particle: particles }}>
          <LinkWithProgress href="/docs/installation">
            <button className="px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl flex items-center mx-auto text-black font-semibold">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </LinkWithProgress>
        </CollMode>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
