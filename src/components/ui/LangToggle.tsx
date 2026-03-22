"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Languages } from "lucide-react";
import { motion } from "framer-motion";

const LangToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-[#FC6736] transition-colors" />
      <span className="ml-1.5 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
        {language === "en" ? "EN" : "中"}
      </span>
    </motion.button>
  );
};

export default LangToggle;
