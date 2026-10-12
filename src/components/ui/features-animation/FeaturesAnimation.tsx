"use client";
import { JSX, useEffect, useState } from "react";

type FeatureItem = {
  id: number;
  title: string;
  content: string;
  icon?: JSX.Element;
};

type FeaturesProps = {
  collapseDelay?: number;
  ltr?: boolean;
  data: FeatureItem[];
};

const FeaturesAnimation: React.FC<FeaturesProps> = ({
  collapseDelay = 5000,
  data = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const autoScrollTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, data.length]);

  return (
    <section id="features">
      <div className="container mx-auto max-w-6xl px-16 text-[var(--text-primary-color)]">
        <div className="mx-auto grid h-full gap-10">
          <div className={`order-1 flex justify-center`}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6 md:gap-y-8 lg:gap-y-10">
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex flex-col items-center text-center gap-y-6 
                    ${
                      data.length % 2 !== 0 && index + 1 === data.length
                        ? "lg:col-span-2 lg:mx-auto xl:mx-0 xl:col-span-1"
                        : ""
                    }`}
                >
                  {/* Progress Bar */}
                  <div className="w-full flex items-center gap-2">
                    <div className="h-1 flex-1  bg-[var(--secondary-color-2)] relative">
                      <div
                        className={`absolute left-0 h-full bg-[var(--secondary-color)] transition-all ease-linear`}
                        style={{
                          width: currentIndex === index ? "100%" : "0%",
                          transitionDuration:
                            currentIndex === index
                              ? `${collapseDelay}ms`
                              : "0s",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Content icon */}
                  <div>
                    <div className="bg-[var(--secondary-color-4)] hover:bg-[var(--secondary-color-2)] rounded-lg size-20 mx-auto flex items-center justify-center p-3">
                      <span className="text-[var(--secondary-color)]">
                        {item?.icon}
                      </span>
                    </div>
                    <div className="space-y-2 mt-4">
                      <h3 className="text-lg lg:text-2xl font-bold">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="text-[16px] w-80 text-muted-foreground text-[var(--opacity-text-color)] text-balance lg:text-pretty">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .item-box {
          width: 3rem;
          height: 3rem;
        }
      `}</style>
    </section>
  );
};

export default FeaturesAnimation;
