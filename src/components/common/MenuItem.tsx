"use client";
import { useAppContext } from "@/context/AppContext";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import LinkWithProgress from "./LinkWithProgress";
import { navigationActive } from "@/utils/navigationActive";

interface IProps {
  icon: React.ReactNode;
  title: string;
  submenu?: { name: string; href: string }[];
  parentHover?: boolean;
  subMenuHover?: boolean;
  href?: string;
}

const MenuItem: React.FC<IProps> = ({
  icon,
  title,
  submenu,
  parentHover = true,
  subMenuHover = false,
  href = "/",
}) => {
  const pathName = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeSubMenuHeading, setActiveSubMenuHeading] = useState(false);
  const { sideBar } = useAppContext();
  const activeNavigation = navigationActive(href, pathName);
  const singleSubmenu = submenu?.find((sub) => sub?.href === pathName);

  useEffect(() => {
    setActiveSubMenuHeading(() =>
      navigationActive(singleSubmenu?.href, pathName),
    );
  }, [singleSubmenu?.href, pathName]);

  const iconWrapperClasses =
    "text-sm text-white dark:text-[var(--primary-color)] bg-[var(--primary-color)] dark:bg-[var(--primary-color-3)] p-1.5 rounded";

  const withSubmenu = (
    <div
      onClick={() => {
        setIsSubMenuOpen((prev) => !prev);
        setActiveSubMenuHeading(false);
      }}
      className="flex items-center justify-between w-full cursor-pointer"
    >
      <div className="flex items-center gap-3.5">
        <span className={iconWrapperClasses}>{icon}</span>
        <p
          className={`font-semibold ${
            (activeNavigation || activeSubMenuHeading) &&
            "text-[var(--primary-color)]"
          }`}
        >
          {title}
        </p>
      </div>
      {isSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </div>
  );

  const withOutSubmenu = (
    <LinkWithProgress
      href={href}
      className="flex items-center gap-3.5 cursor-pointer"
    >
      <span className={iconWrapperClasses}>{icon}</span>
      <span
        className={`font-semibold ${
          (activeNavigation || activeSubMenuHeading) &&
          "text-[var(--primary-color)]"
        }`}
      >
        {title}
      </span>
    </LinkWithProgress>
  );

  if (!sideBar && pathName.includes("docs")) {
    return (
      <div className="py-2">
        <p className={iconWrapperClasses}>{icon}</p>
      </div>
    );
  }

  return (
    <div key={title + href}>
      <div
        className={`${
          parentHover ? "hover:bg-[var(--primary-color-2)]" : ""
        } dark:text-[var(--black-color-4)]  hover:text-[var(--primary-color)] rounded py-2 px-2.5`}
      >
        {submenu ? withSubmenu : withOutSubmenu}
      </div>

      <div>
        {(isSubMenuOpen || activeSubMenuHeading) && submenu && (
          <div className="flex flex-col gap-y-1 ml-5 pl-2 py-0.5 border-l border-[var(--primary-color)] min-h-9">
            {submenu.map((sub, index) => (
              <LinkWithProgress
                key={sub.name + index}
                href={sub.href}
                className={`text-black dark:text-[var(--black-color-4)] hover:text-white hover:dark:text-[var(--primary-color)] capitalize rounded py-1 px-2.5 ${
                  subMenuHover
                    ? "hover:bg-[var(--primary-color)] hover:dark:bg-[var(--primary-color-4)]"
                    : ""
                } ${
                  navigationActive(sub?.href, pathName) &&
                  "bg-[var(--primary-color)] dark:bg-[var(--primary-color-4)] text-white dark:text-[var(--primary-color)]"
                }`}
              >
                {sub.name}
              </LinkWithProgress>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
