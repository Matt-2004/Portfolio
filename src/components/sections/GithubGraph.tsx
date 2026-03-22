"use client";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Title from "@/components/ui/Title";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function GithubGraph() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll to the right so the latest contributions (today) are visible first on mobile
  useEffect(() => {
    if (scrollRef.current && mounted) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [theme, mounted]); // Re-trigger if re-rendered

  if (!mounted) {
    return (
      <motion.section
        className="py-16 border-b"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <Title text={t.github.title} />
        <div className="w-full h-[180px] p-6 rounded-2xl bg-[var(--bg-section-hi)] border border-[var(--border)] animate-pulse" />
      </motion.section>
    );
  }

  return (
    <motion.section
      className="py-16 border-b"
      style={{ borderColor: "var(--border-subtle)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Title text={t.github.title} />
      <div
        ref={scrollRef}
        className="w-full p-6 rounded-2xl bg-[var(--bg-section-hi)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow duration-300 overflow-x-auto flex flex-row-reverse md:flex-row md:justify-center"
      >
        <div className="min-w-max">
          <GitHubCalendar
            username="Matt-2004"
            colorScheme={theme as "light" | "dark"}
            theme={{
              light: ["#ebedf0", "#fcd9ce", "#fda98f", "#fc805c", "#FC6736"],
              dark: ["#161b22", "#4a1e10", "#873216", "#c3481b", "#FC6736"],
            }}
            blockMargin={6}
            blockSize={12}
            fontSize={12}
          />
        </div>
      </div>
    </motion.section>
  );
}
