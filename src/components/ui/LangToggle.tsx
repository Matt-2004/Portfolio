"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";

const LangToggle = ({ scrolled = false }: { scrolled?: boolean }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
      style={{
        color: scrolled ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)",
        borderColor: scrolled ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.3)",
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.color = scrolled ? "#000" : "#fff";
        (e.target as HTMLElement).style.borderColor = scrolled
          ? "rgba(0,0,0,0.4)"
          : "rgba(255,255,255,0.6)";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.color = scrolled
          ? "rgba(0,0,0,0.6)"
          : "rgba(255,255,255,0.7)";
        (e.target as HTMLElement).style.borderColor = scrolled
          ? "rgba(0,0,0,0.2)"
          : "rgba(255,255,255,0.3)";
      }}
      aria-label="Toggle language"
      data-cursor-hover
    >
      {language === "en" ? "EN" : "中"}
    </motion.button>
  );
};

export default LangToggle;
