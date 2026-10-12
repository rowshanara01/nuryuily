"use client";
import React from "react";
import {
  TabContents,
  TabContent,
  TabLists,
  TabList,
  TabsProvider,
} from "../../common/ImageTabs";
import SectionIntro from "@/components/common/SectionIntro";
import RadioTabs from "@/components/common/RadioTabs";
import Lottie from "lottie-react";
import designAnimationData from "../../../../public/json/design-animation-lottie.json";
import developerAnimationData from "../../../../public/json/developer-lottie.json";
import {
  FaReact,
  FaCode,
  FaRocket,
  FaCogs,
  FaTools,
  FaLayerGroup,
  FaTerminal,
  FaLaptopCode,
  FaPuzzlePiece,
} from "react-icons/fa";

const ImageTabsSection = () => {
  return (
    <section className="container h-full">
      <SectionIntro
        title={{
          highLiteWords: "Why Choose Us",
          normalWords: "At Nurui",
          highlightColor: "text-[var(--primary-color)]",
        }}
        sectionNameColor="text-[var(--primary-color)]"
        description="At Nurui, we prioritize clean code, seamless tools, and fast integration. Our solutions reduce complexity, boost development speed, and ensure consistency."
      />

      <TabsProvider
        defaultValue="1"
        className="xl:grid xl:grid-cols-12 gap-24 space-y-7"
      >
        <TabLists className="xl:col-span-5">
          {tabs.map((tab, index) => (
            <TabList key={index} value={tab.id} index={index}>
              <div className="flex flex-col xl:flex-row items-center gap-x-5">
                <Lottie
                  animationData={tab?.tabList?.icon}
                  loop={true}
                  className="size-24 hidden xl:block"
                />
                <div className="space-y-1.5 text-center xl:text-left">
                  <p className="text-2xl capitalize font-semibold">
                    {tab?.tabList?.title}
                  </p>
                  <p className="text-[var(--opacity-text-color)]">
                    {tab?.tabList?.description}
                  </p>
                </div>
              </div>
            </TabList>
          ))}
        </TabLists>

        <TabContents className="xl:col-span-7">
          {tabs.map((tab, index) => (
            <TabContent key={index} value={tab.id} index={index}>
              <div className="space-y-3 xl:space-y-4">
                <h2 className="text-xl capitalize text-center lg:text-start">
                  <span className="border-b-2 border-white/35 pb-0.5">
                    What We o
                  </span>
                  fers
                </h2>
                <h1 className="text-3xl xl:text-5xl font-semibold max-w-2xl mx-auto lg:mx-0 text-center lg:text-start">
                  {tab?.Content?.heading
                    .split(" ")
                    .slice(0, tab?.Content?.heading?.split(" ")?.length - 3)
                    .join(" ")}{" "}
                  <span className="text-[var(--primary-color)]">
                    {tab?.Content?.heading
                      .split(" ")
                      .slice(tab?.Content?.heading?.split(" ")?.length - 3)
                      .join(" ")}
                  </span>
                </h1>
                <p className="xl:text-xl max-w-3xl mx-auto lg:mx-0 text-[var(--opacity-text-color)] text-center lg:text-start">
                  {tab?.Content?.description}
                </p>
                <RadioTabs data={tab?.Content?.tabs} />
              </div>
            </TabContent>
          ))}
        </TabContents>
      </TabsProvider>
    </section>
  );
};

export default ImageTabsSection;

const tabs = [
  {
    id: "1",
    tabList: {
      icon: designAnimationData,
      title: "UI Component Library",
      description:
        "Install and use production ready components instantly via CLI.",
    },
    Content: {
      title: "What We Provide",
      heading: "Production-ready UI components accessible with one command.",
      description:
        "Nurui CLI-based component library empowers developers to instantly scaffold fully functional UI components into their projects. Designed for speed, consistency, and scalability, our components follow modern best practices and can be customized easily.",
      tabs: [
        {
          id: "install",
          title: "Easy Installation",
          content:
            "Get started with a single CLI command. Just run `npx nurui install` to bring in the latest version of components directly into your codebase without setup hassle.",
          items: [
            {
              icon: <FaTerminal />,
              title: "One Command Setup",
              description:
                "Run a single CLI command to install everything you need.",
            },
            {
              icon: <FaRocket />,
              title: "Instant Access",
              description:
                "Start using components immediately without additional setup.",
            },
            {
              icon: <FaTools />,
              title: "No Config Needed",
              description:
                "Pre-configured components ready to use in any environment.",
            },
          ],
        },
        {
          id: "customize",
          title: "Customization",
          content:
            "All components come with built-in support for theming and customization. Whether you're using Tailwind, SCSS, or vanilla CSS our styles adapt to your stack seamlessly.",
          items: [
            {
              icon: <FaCogs />,
              title: "Theme Support",
              description:
                "Apply your brand theme easily using config options.",
            },
            {
              icon: <FaLayerGroup />,
              title: "Flexible Styles",
              description: "Supports Tailwind, SCSS, CSS Modules, and more.",
            },
            {
              icon: <FaPuzzlePiece />,
              title: "Composable Design",
              description: "Build custom UIs by combining modular components.",
            },
          ],
        },
        {
          id: "performance",
          title: "Performance",
          content:
            "Components are tree-shakable, lightweight, and optimized for accessibility and responsiveness, ensuring fast load times and inclusive UX across devices.",
          items: [
            {
              icon: <FaReact />,
              title: "React Optimized",
              description:
                "Seamlessly integrates with React for dynamic and responsive UI rendering.",
            },
            {
              icon: <FaCode />,
              title: "Lightweight Codebase",
              description:
                "Every component is designed with performance in mind, minimizing bundle size.",
            },
            {
              icon: <FaRocket />,
              title: "Fast Load Times",
              description:
                "Optimized for speed, our components load instantly across all devices.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "2",
    tabList: {
      icon: developerAnimationData,
      title: "Developer Experience",
      description:
        "Enhance productivity with tools that prioritize code quality and speed.",
    },
    Content: {
      title: "What We Provide",
      heading: "Developer-first tools to accelerate UI development.",
      description:
        "Nurui is built for developers who value clean, modular code and efficient workflows. From strict TypeScript support to flexible integration options, our tools help you stay focused on building features, not boilerplate.",
      tabs: [
        {
          id: "typescript",
          title: "TypeScript",
          content:
            "All components are fully typed with TypeScript, offering intelligent autocompletion and safer code in modern editors like VSCode.",
          items: [
            {
              icon: <FaCode />,
              title: "Full Typing",
              description:
                "Type-safe components for robust and predictable code.",
            },
            {
              icon: <FaLaptopCode />,
              title: "Editor IntelliSense",
              description:
                "Get real-time suggestions and docs inside your IDE.",
            },
            {
              icon: <FaReact />,
              title: "TS + React",
              description:
                "Designed to work flawlessly with React and TSX files.",
            },
          ],
        },
        {
          id: "cli-tools",
          title: "CLI Tools",
          content:
            "Beyond installation, the nurui CLI supports component generation, config updates, and live previews making your dev workflow smoother and faster.",
          items: [
            {
              icon: <FaTerminal />,
              title: "Component Generator",
              description:
                "Quickly scaffold new components with prebuilt templates.",
            },
            {
              icon: <FaCogs />,
              title: "Smart Config",
              description: "Easily update and manage your component settings.",
            },
            {
              icon: <FaRocket />,
              title: "Live Preview",
              description: "See component changes in real-time while coding.",
            },
          ],
        },
        {
          id: "frameworks",
          title: "Framework Support",
          content:
            "Seamlessly integrates with React, Next.js, and other popular frameworks. We also offer guides and templates to help you get started instantly.",
          items: [
            {
              icon: <FaReact />,
              title: "React",
              description: "First-class support for React applications.",
            },
            {
              icon: <FaCode />,
              title: "Next.js",
              description:
                "Works perfectly with Next.js dynamic routing and SSR.",
            },
            {
              icon: <FaTools />,
              title: "Starter Templates",
              description: "Boilerplates available for major frameworks.",
            },
          ],
        },
      ],
    },
  },
];
