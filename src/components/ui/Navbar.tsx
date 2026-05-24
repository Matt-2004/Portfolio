"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";
import LangToggle from "./LangToggle";

const sections = ["about", "work", "contact"] as const;

const Navbar = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    const hero = document.getElementById("hero");
    if (hero) observer.observe(hero);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.06)"
          : "1px solid transparent",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-2xl font-extrabold tracking-[-0.03em] text-black hover:opacity-70 transition-opacity duration-200"
        >
          W
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative font-label text-label uppercase transition-colors duration-200 py-1 text-black/80 hover:text-black"
              >
                {t.nav[id]}
                {active === id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-black"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <LangToggle />
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center gap-3">
          <LangToggle />
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-[1000] safe-area-bottom"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div className="flex justify-around py-2.5">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative font-label text-[10px] uppercase tracking-[0.1em] py-2 px-4 rounded-lg transition-all duration-200"
              style={{ color: active === id ? "#000" : "rgba(0,0,0,0.45)" }}
            >
              {t.nav[id]}
              {active === id && (
                <motion.div
                  layoutId="mobile-active"
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-full bg-[#fc6903]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
