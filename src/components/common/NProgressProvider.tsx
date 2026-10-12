"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false, speed: 800 });

export default function NProgressProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 700);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}
