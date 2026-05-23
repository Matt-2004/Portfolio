"use client";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function GithubGraph() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [calendarScale, setCalendarScale] = useState(1);
  const [calendarSize, setCalendarSize] = useState({ width: 0, height: 0 });

  const now = new Date();
  const year = now.getFullYear();
  const rangeStart = new Date(now.getFullYear(), now.getMonth() - 11, 1);
  const rangeEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const toLocalIsoDate = (date: Date) => {
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  };

  const rangeStartIso = toLocalIsoDate(rangeStart);
  const rangeEndIso = toLocalIsoDate(rangeEnd);

  const formatRangeDate = (date: Date) =>
    language === "zh"
      ? `${date.getFullYear()}年${date.getMonth() + 1}月`
      : date.toLocaleString("en-US", { month: "short", year: "numeric" });

  const yearLabel =
    language === "zh" ? `${year} 年贡献记录` : `${year} Contributions`;
  const rangeLabel = `${formatRangeDate(rangeStart)} - ${formatRangeDate(rangeEnd)}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const container = containerRef.current;
    const calendar = calendarRef.current;

    if (!container || !calendar) {
      return;
    }

    let frameId: number | null = null;

    const measure = () => {
      frameId = window.requestAnimationFrame(() => {
        const svg = calendar.querySelector("svg") as SVGSVGElement | null;
        if (!svg) {
          return;
        }

        const intrinsicWidth =
          svg.viewBox?.baseVal?.width || svg.getBoundingClientRect().width;
        const intrinsicHeight =
          svg.viewBox?.baseVal?.height || svg.getBoundingClientRect().height;

        if (!intrinsicWidth || !intrinsicHeight) {
          return;
        }

        const nextScale = isMobile
          ? 1
          : Math.min(1, container.clientWidth / intrinsicWidth);

        setCalendarScale((prev) =>
          Math.abs(prev - nextScale) < 0.01 ? prev : nextScale,
        );
        setCalendarSize((prev) =>
          prev.width === intrinsicWidth && prev.height === intrinsicHeight
            ? prev
            : { width: intrinsicWidth, height: intrinsicHeight },
        );
      });
    };

    measure();

    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(container);

    window.addEventListener("resize", measure);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isMobile, mounted, theme]);

  if (!mounted) {
    return (
      <motion.section
        className="py-16 "
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="flex items-center gap-6 mb-8">
          <span
            className="font-label text-label uppercase tracking-[0.12em]"
            style={{ color: "var(--text-muted)" }}
          >
            {t.github.title}
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border-dim)" }}
          />
        </div>
        <div className="w-full h-[180px] p-6 rounded-2xl bg-[var(--bg-section-hi)] border border-[var(--border)] animate-pulse" />
      </motion.section>
    );
  }

  return (
    <motion.section
      className="py-16 "
      style={{ borderColor: "var(--border-subtle)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-6 mb-8">
        <span
          className="font-label text-label uppercase tracking-[0.12em]"
          style={{ color: "var(--text-muted)" }}
        >
          {t.github.title}
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--border-dim)" }}
        />
      </div>
      <div className="mb-3 px-1">
        <p
          className="text-sm font-semibold"
          style={{ color: "var(--text-body)" }}
        >
          {yearLabel}
        </p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          {rangeLabel}
        </p>
      </div>
      <div
        ref={containerRef}
        className="w-full p-5 rounded-2xl bg-[var(--bg-section-hi)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="overflow-x-auto overflow-y-hidden md:overflow-hidden">
          <div
            className="md:mx-auto"
            style={{
              width: calendarSize.width
                ? isMobile
                  ? `${calendarSize.width}px`
                  : `${calendarSize.width * calendarScale}px`
                : "100%",
              height: calendarSize.height
                ? isMobile
                  ? `${calendarSize.height}px`
                  : `${calendarSize.height * calendarScale}px`
                : "auto",
            }}
          >
            <div
              ref={calendarRef}
              style={{
                width: "max-content",
                transform: isMobile ? "none" : `scale(${calendarScale})`,
                transformOrigin: "top left",
              }}
            >
              <GitHubCalendar
                username="Matt-2004"
                transformData={(data) =>
                  data.filter(
                    (item) =>
                      item.date >= rangeStartIso && item.date <= rangeEndIso,
                  )
                }
                colorScheme={theme as "light" | "dark"}
                theme={{
                  light: [
                    "#ebedf0",
                    "#fcd9ce",
                    "#fda98f",
                    "#fc805c",
                    "#FC6736",
                  ],
                  dark: ["#161b22", "#4a1e10", "#873216", "#c3481b", "#FC6736"],
                }}
                blockMargin={6}
                blockSize={12}
                fontSize={12}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
