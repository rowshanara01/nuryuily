"use client";
import React from "react";

interface IProps {
  data: {
    id: string;
    title: string;
    content: string;
    items: {
      icon: React.JSX.Element;
      title: string;
      description: string;
    }[];
  }[];
}

const RadioTabs: React.FC<IProps> = ({ data }) => {
  const [activeTab, setActiveTab] = React.useState(data[0]?.id);

  const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab(e.target.id);
  };

  const activeContent = data.find((tab) => tab.id === activeTab);

  return (
    <div className="space-y-3.5 pt-3">
      {/* Tabs */}
      <div className="flex gap-2 w-fit mx-auto lg:mx-0 border-b border-[var(--primary-color)]">
        {data?.map((tab) => (
          <label
            key={tab?.id}
            className="flex flex-grow items-center justify-center cursor-pointer"
          >
            <input
              type="radio"
              name="radio"
              id={tab?.id}
              className="peer hidden"
              onChange={handleTabChange}
              defaultChecked={tab?.id === data[0]?.id}
            />
            <span className="tracking-widest capitalize peer-checked:bg-[var(--primary-color)]  dark:peer-checked:bg-[var(--primary-color-3)] peer-checked:border peer-checked:border-b-0 border-[var(--primary-color)] peer-checked:text-[var(--white-color)]  dark:peer-checked:text-[var(--primary-color)] text-[var(--black-color)] dark:text-[var(--white-color)] font-semibold rounded-t-lg p-2 transition duration-150 ease-in-out">
              {tab?.title}
            </span>
          </label>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-5 md:space-y-8 max-w-3xl">
        <p className="lg:text-lg text-[var(--opacity-text-color)] text-center lg:text-start">
          {activeContent?.content}
        </p>

        {/* Items */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {activeContent?.items?.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="flex items-center justify-center [clipPath:polygon(50%_0%,_83%_12%,_100%_43%,_94%_78%,_68%_100%,_32%_100%,_6%_78%,_0%_43%,_17%_12%)] bg-white w-16 h-12">
                {/* Icon */}
                <span className="text-3xl text-[var(--primary-color)]">
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-[var(--opacity-text-color)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioTabs;
