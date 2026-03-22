"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [isReady, setIsReady] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Highly delay the initialization of scroll tracking to prevent blocking the main thread during LCP
    const timer = setTimeout(() => {
      setContainer(document.getElementById("main-scroll-container"));
      setIsDesktop(window.innerWidth >= 1024);
      setIsReady(true);
    }, 150);

    // Track resize events to switch between window scroll (mobile) and div scroll (desktop)
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isReady) return null;

  // Use a key to force React to remount the hook if we switch between mobile (window scroll) and desktop (div scroll)
  return (
    <ProgressBar
      key={isDesktop ? "desktop" : "mobile"}
      container={container}
      isDesktop={isDesktop}
    />
  );
}

function ProgressBar({
  container,
  isDesktop,
}: {
  container: HTMLElement | null;
  isDesktop: boolean;
}) {
  const { scrollYProgress } = useScroll({
    // If mobile (<1024px), track the global window scroll. If desktop, track the split-screen scroll container.
    container: isDesktop && container ? { current: container } : undefined,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-orange-400 via-[#FC6736] to-[#e55620] origin-left z-[10000] shadow-[0_0_10px_rgba(252,103,54,0.5)]"
      style={{ scaleX }}
    />
  );
}
