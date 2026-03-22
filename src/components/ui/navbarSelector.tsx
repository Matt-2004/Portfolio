"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/lib/LanguageContext";

const navItems = [
  { id: "home", labelKey: "home" as const },
  { id: "skills", labelKey: "skills" as const },
  { id: "projects", labelKey: "projects" as const },
  { id: "contact", labelKey: "contact" as const },
];

const scrollTo = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", inline: "start" });
};

/* ── Mobile floating top bar ─────────────────────────────────── */
const MobileNav = ({
  active,
  setActive,
}: {
  active: string;
  setActive: (id: string) => void;
}) => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navContent = (
    /* Full-width fixed row so justify-center works reliably */
    <div className="lg:hidden fixed top-3 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.nav
        aria-label="Mobile navigation"
        className="pointer-events-auto"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
      >
        <div
          className="flex items-center gap-1 px-2 py-1.5 rounded-full border backdrop-blur-md shadow-lg shadow-black/20"
          style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }}
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  scrollTo(item.id);
                }}
                className="relative px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full"
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-pill"
                    className="absolute inset-0 rounded-full bg-[#FC6736]/15 border border-[#FC6736]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? "text-[#FC6736]" : ""
                  }`}
                  style={!isActive ? { color: "var(--text-muted)" } : undefined}
                >
                  {t.nav[item.labelKey]}
                </span>
              </button>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );

  if (!mounted) return null;
  return createPortal(navContent, document.body);
};

/* ── Desktop sidebar nav ─────────────────────────────────────── */
const DesktopNav = ({
  active,
  setActive,
}: {
  active: string;
  setActive: (id: string) => void;
}) => {
  const { t } = useLanguage();
  return (
    <nav aria-label="Page navigation" className="hidden lg:block">
      <ul className="flex flex-col gap-3 mt-16 ml-10">
        {navItems.map((item, i) => {
          const isActive = active === item.id;
          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.8 + i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <a
                onClick={() => {
                  setActive(item.id);
                  scrollTo(item.id);
                }}
                className={`${
                  isActive ? "opacity-100" : "opacity-50 hover:opacity-75"
                } flex items-center gap-3 w-[15rem] cursor-pointer transition-opacity duration-200`}
              >
                <motion.div
                  className="h-[2px] rounded-full"
                  style={{ background: "var(--text-primary)" }}
                  animate={{ width: isActive ? 112 : 48 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                <span
                  className={`font-bold text-sm tracking-widest uppercase transition-all duration-200`}
                  style={{
                    color: isActive
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                  }}
                >
                  {t.nav[item.labelKey]}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="w-1.5 h-1.5 rounded-full bg-[#FC6736]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

/* ── Combined export ─────────────────────────────────────────── */
const NavbarSelector = () => {
  const [active, setActive] = useState("home");
  return (
    <>
      <MobileNav active={active} setActive={setActive} />
      <DesktopNav active={active} setActive={setActive} />
    </>
  );
};

export default NavbarSelector;
