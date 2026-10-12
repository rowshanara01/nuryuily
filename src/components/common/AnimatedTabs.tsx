"use client";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  tabs: { id: string; icon?: ReactNode; label: string; content: ReactNode }[];
}

export default function AnimatedTabs({ tabs }: IProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const uniqueId = uuidv4();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id
                ? ""
                : "hover:dark:bg-[var(--primary-color-4)] border border-[var(--primary-color)] dark:border-[var(--primary-color-3)] rounded-xl"
            } relative px-3 py-1.5 font-semibold flex items-center gap-x-1 text-[var(--primary-color)]`}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId={`bubble-${uniqueId}`}
                className="absolute inset-0 z-10 bg-[var(--primary-color)]  dark:bg-[var(--primary-color-4)] border border-[var(--primary-color-3)]"
                style={{ borderRadius: 12 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span
              className={`relative z-20 ${activeTab === tab.id ? "text-white dark:text-[var(--primary-color)]" : "text-[var(--primary-color)]"}`}
            >
              {tab.icon}
            </span>
            <span
              className={`relative z-20 ${activeTab === tab.id ? "text-white dark:text-[var(--primary-color)]" : "text-[var(--primary-color)]"}`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
}
