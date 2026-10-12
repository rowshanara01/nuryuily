"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import nProgress from "nprogress";
import React from "react";

interface ILinkProgress {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const LinkWithProgress = ({
  className,
  children,
  href,
  ...props
}: ILinkProgress) => {
  return (
    <Link
      href={href}
      className={cn(``, className)}
      onClick={() => nProgress.start()}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkWithProgress;
