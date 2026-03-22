"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
    >
      <div className="flex items-center gap-4 mb-6">
        <span
          className="text-xs font-bold tracking-[0.25em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          {t.about.title}
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </div>

      <div
        className="text-base leading-relaxed"
        style={{ color: "var(--text-body)" }}
      >
        <p>{t.about.p1}</p>

        <AnimatePresence>
          {expanded && (
            <motion.p
              key="extra"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-3"
            >
              {t.about.p2}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 text-xs font-bold tracking-widest uppercase text-[#FC6736] border border-[#FC6736]/40 px-4 py-1.5 rounded-full hover:bg-[#FC6736] hover:text-white transition-colors duration-200"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          {expanded ? t.about.showLess : t.about.readMore}
        </motion.button>
      </div>
    </motion.section>
  );
};

export default About;
