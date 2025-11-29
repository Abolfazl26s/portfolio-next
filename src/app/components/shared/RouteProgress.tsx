"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// A lightweight top progress bar that appears after an internal link click
// and hides when navigation completes (pathname/search changes).
const RouteProgress = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  // Start the indicator when the user clicks an internal link that changes the route.
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target === "_blank" || anchor.download) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      // Only trigger for internal navigations that actually change the URL.
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const next = `${url.pathname}${url.search}${url.hash}`;
      const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (next === current) return;

      setIsActive(true);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  // Stop the indicator when the route finishes changing (path update).
  useEffect(() => {
    if (isActive) {
      const timeout = setTimeout(() => setIsActive(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [pathname, isActive]);

  // Safety: auto-hide if something goes wrong (prevents a stuck bar).
  useEffect(() => {
    if (!isActive) return;
    const timeout = setTimeout(() => setIsActive(false), 5000);
    return () => clearTimeout(timeout);
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0.2 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 right-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-cyan-500 via-emerald-400 to-amber-400 shadow"
        />
      )}
    </AnimatePresence>
  );
};

export default RouteProgress;
