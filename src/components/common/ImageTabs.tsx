"use client";
import React, { ReactNode, useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
  isDesktop: boolean;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider");
  }
  return context;
};

export function TabsProvider({
  children,
  defaultValue,
  className,
}: {
  children: ReactNode;
  defaultValue: string;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, isDesktop }}>
      <div className={cn("w-full h-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabLists({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("h-fit space-y-5", className)}>{children}</div>;
}

export function TabList({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
  index: number;
}) {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <motion.div
      className={`rounded-xl overflow-hidden p-4 cursor-pointer transition-all border 
         ${
           activeTab === value
             ? "bg-[var(--primary-color-3)] dark:bg-[var(--primary-color-4)] border-[var(--primary-color)]"
             : "hover:bg-[var(--primary-color-4)] hover:border-[var(--primary-color)] border-[var(--border-color)]"
         }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </motion.div>
  );
}

export function TabContents({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <AnimatePresence mode="popLayout">{children}</AnimatePresence>
    </div>
  );
}

export function TabContent({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
  index: number;
}) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <motion.div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, overflow: "hidden" }}
        animate={{ opacity: 1, overflow: "hidden" }}
        exit={{ opacity: 0, overflow: "hidden" }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
