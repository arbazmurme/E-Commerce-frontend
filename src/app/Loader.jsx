"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, speed: 400, easing: "ease" });

export default function Loader() {
  const pathname = usePathname(); // Detect current route
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setIsPending(true);
    };

    const handleComplete = () => {
      NProgress.done();
      setIsPending(false);
    };

    handleStart(); // Trigger loader when the pathname changes
    handleComplete(); // Stop loader when the route loads

    return () => {
      handleComplete();
    };
  }, [pathname]);

  return null; // This component doesn't render anything visually
}
