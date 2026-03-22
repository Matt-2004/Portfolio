"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, Translations } from "./i18n";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "zh")) {
      setLanguage(savedLang);
    } else {
      // Default to english or user's browser default
      const browserLang = navigator.language.startsWith("zh") ? "zh" : "en";
      setLanguage(browserLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "zh" : "en";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  const t = translations[language];

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{ language: "en", toggleLanguage: () => {}, t: translations.en }}
      >
        <div className="opacity-0">{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className="opacity-100 transition-opacity duration-300">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return a default mock during SSR or before hydration if used, though above we handle it
    return { language: "en", toggleLanguage: () => {}, t: translations.en };
  }
  return context;
};
