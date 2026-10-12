"use client";
import { useState } from "react";
import StackingCards, {
  StackingCardItem,
} from "@/components/common/StackingCards";
import SectionIntro from "@/components/common/SectionIntro";
import designAnimationData from "../../../../public/json/design-animation-lottie.json";
import developerAnimationData from "../../../../public/json/developer-lottie.json";
import communityAnimationData from "../../../../public/json/community-lottie.json";
import visionAnimationData from "../../../../public/json/vision-lottie.json";
import missionAnimationData from "../../../../public/json/mission-lottie.json";
import Lottie from "lottie-react";

export default function StackingCardsSection() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <section
      className="container pb-14 xl:pb-0"
      ref={(node) => setContainer(node)}
    >
      <SectionIntro
        title={{
          highLiteWords: "Stands Out",
          normalWords: "Why Nurui",
          highlightColor: "text-[var(--secondary-color)]",
        }}
        sectionGap="pb-2.5 xl:pb-3"
        description="nurui delivers elegant, modular UI components built for speed and scalability.
        nurui focuses on minimalist design, intuitive use, and developer experience.
        nurui is powered by an open-source community with a future-ready vision."
      />
      <StackingCards
        totalCards={cards.length}
        scrollOptons={{ container: { current: container } }}
      >
        {cards.map(({ description, icon, title }, index) => {
          return (
            <StackingCardItem
              key={index}
              index={index}
              className="h-96 xl:h-[700px]"
            >
              <div
                className="h-96 xl:h-[600px] aspect-video w-full  shadow-xl dark:shadow-none mx-auto relative rounded-2xl bg-gradient-to-t from-white dark:from-white/5 via-white dark:via-white/5 to-white dark:to-[var(--secondary-color-4)] border 
              border-[white]/20 backdrop-blur-2xl flex items-center justify-between text-center xl:text-left"
              >
                <div className="xl:w-1/2 space-y-4 lg:space-y-5 px-6 xl:px-16">
                  <h2 className="text-3xl xl:text-5xl font-semibold bg-[var(--secondary-color-1)] dak:bg-[var(--secondary-color-2)] w-fit py-2 px-3 rounded">
                    {title}
                  </h2>
                  <p className="text-xl text-balance xl:text-pretty">
                    {description}
                  </p>
                </div>
                <div className="bg-[var(--secondary-color-1)] dark:bg-[var(--secondary-color-4)] h-full flex items-center justify-center rounded-r-2xl">
                  <Lottie
                    animationData={icon}
                    loop={true}
                    className="size-[510px] hidden xl:block"
                  />
                </div>
              </div>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </section>
  );
}

const cards = [
  {
    title: "Our Mission",
    description:
      "To simplify UI development by providing developers with elegant, modular components that promote speed, consistency, and scalability across every project.",
    icon: missionAnimationData,
  },
  {
    title: "Design Philosophy",
    description:
      "nurui blends minimalism with functionality each component is crafted with care, focusing on clean aesthetics and purposeful interactions.",
    icon: designAnimationData,
  },
  {
    title: "Developer Experience",
    description:
      "We obsess over DX. That means clear docs, predictable APIs, smart defaults, and zero unnecessary friction from install to production.",
    icon: developerAnimationData,
  },
  {
    title: "Open Source",
    description:
      "nurui is built with and for the community. We're open-source, transparent, and always eager to learn and grow with developers worldwide.",
    icon: communityAnimationData,
  },
  {
    title: "Future Vision",
    description:
      "We're not just building components we're creating an ecosystem. Expect design systems, plugin support, and more in our future roadmap.",
    icon: visionAnimationData,
  },
];
