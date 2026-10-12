"use client";
import { FC, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  ChevronRightIcon,
  BellIcon,
} from "lucide-react";

interface ListItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  customStyle?: string;
}

const SettingsNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const svgControls = useAnimation();

  // List Items
  const items: ListItem[] = [
    { icon: UserCircleIcon, name: "Profile" },
    { icon: LayoutGridIcon, name: "Your applications" },
    { icon: Building2, name: "Teams" },
    { icon: BellIcon, name: "Notifications" },
    {
      icon: TrashIcon,
      name: "Remove account",
      customStyle:
        "!text-red-500 hover:bg-red-500/10 focus-visible:text-red-500 focus-visible:bg-red-500/10 focus-visible:border-red-500/10",
    },
  ];

  const listVariants = {
    visible: {
      clipPath: "inset(0% 0% 0% 0% round 12px)",
      transition: {
        bounce: 0,
      },
    },
    hidden: {
      clipPath: "inset(10% 50% 90% 50% round 12px)",
      transition: {
        duration: 0.3,
        bounce: 0,
      },
    },
  };

  const itemVariants = {
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        delay: i * 0.15,
      },
    }),
    hidden: {
      opacity: 0,
      scale: 0.3,
      filter: "blur(20px)",
    },
  };

  return (
    <nav className="max-w-[200px] w-full mx-auto space-y-2 z-40">
      <motion.div whileTap={{ scale: 0.97 }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-neutral-900 border border-neutral-800 max-w-[300px] w-full flex items-center justify-between p-2.5 rounded-xl outline-none"
        >
          <span className="text-sm font-medium text-neutral-300">Settings</span>
          <div style={{ transformOrigin: "50% 55%" }}>
            <motion.svg
              animate={svgControls}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-400 mt-0.5"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </motion.svg>
          </div>
        </button>

        <motion.ul
          animate={isOpen ? "visible" : "hidden"}
          variants={listVariants}
          initial="hidden"
          className={`absolute z-[1] max-w-[200px] w-full space-y-3 p-2.5 bg-neutral-900 border border-neutral-800 rounded-xl ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {items.map((item, i) => (
            <motion.li
              key={i}
              custom={i + 1}
              variants={itemVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
            >
              <div
                className={`group flex items-center gap-2 rounded-md border border-transparent text-neutral-400 hover:text-neutral-300 focus-visible:text-neutral-300 focus-visible:border-neutral-800 focus-visible:outline-none ${item?.customStyle}`}
              >
                <item.icon width={16} height={16} strokeWidth={1.4} />
                <span className="flex items-center gap-1 text-sm font-medium">
                  {item.name}
                  <ChevronRightIcon
                    className="-translate-x-1 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all"
                    size={12}
                  />
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default SettingsNav;
