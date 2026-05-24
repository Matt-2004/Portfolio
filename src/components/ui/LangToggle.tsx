"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";

const LangToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-full border border-black/20 text-black/60 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:text-black hover:border-black/40"
      aria-label="Toggle language"
      data-cursor-hover
    >
      {language === "en" ? "EN" : "中"}
    </motion.button>
  );
};

export default LangToggle;
