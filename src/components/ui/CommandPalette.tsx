"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Command, CornerDownLeft } from "lucide-react";
import { projects } from "../../lib/data";

interface Action {
  id: string;
  label: string;
  section: string;
  action: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const actions: Action[] = [
    {
      id: "hero",
      label: "Go to Hero",
      section: "Navigation",
      action: () => scrollTo("hero"),
    },
    {
      id: "work",
      label: "Go to Projects",
      section: "Navigation",
      action: () => scrollTo("work"),
    },
    {
      id: "about",
      label: "Go to About",
      section: "Navigation",
      action: () => scrollTo("about"),
    },
    {
      id: "contact",
      label: "Go to Contact",
      section: "Navigation",
      action: () => scrollTo("contact"),
    },
    {
      id: "resume",
      label: "Open Resume",
      section: "Actions",
      action: () => window.open("/Resume.pdf", "_blank"),
    },
    ...projects.map((p) => ({
      id: `project-${p.title}`,
      label: `View ${p.title} Case Study`,
      section: "Projects",
      action: () => {
        if (p.title === "ABACTutor") router.push("/projects/abactutor");
        else {
          scrollTo("work");
          setTimeout(() => {
            const card = document.querySelector(`[data-project="${p.title}"]`);
            if (card) (card as HTMLElement).click();
          }, 400);
        }
      },
    })),
  ];

  const filtered = query
    ? actions.filter(
        (a) =>
          a.label.toLowerCase().includes(query.toLowerCase()) ||
          a.section.toLowerCase().includes(query.toLowerCase()),
      )
    : actions;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === "Enter" && filtered[activeIdx]) {
        e.preventDefault();
        filtered[activeIdx].action();
        setOpen(false);
      }
    },
    [open, filtered, activeIdx, router],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[20000] flex items-start justify-center pt-[20vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            className="relative w-full max-w-lg rounded-2xl border overflow-hidden shadow-2xl"
            style={{
              backgroundColor: "var(--bg-elevated)",
              borderColor: "var(--border-mid)",
            }}
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input */}
            <div
              className="flex items-center gap-3 px-5 py-4 border-b"
              style={{ borderColor: "var(--border-dim)" }}
            >
              <Search
                className="w-4 h-4 shrink-0"
                style={{ color: "var(--text-muted)" }}
              />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIdx(0);
                }}
                placeholder="Search sections, projects, actions..."
                className="flex-1 bg-transparent outline-none font-body text-sm"
                style={{ color: "var(--text-primary)" }}
              />
              <kbd
                className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "var(--text-muted)",
                }}
              >
                <CornerDownLeft className="w-3 h-3" /> select
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p
                  className="text-center py-8 font-body text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  No results found
                </p>
              )}
              {filtered.map((a, i) => (
                <button
                  key={a.id}
                  onClick={() => {
                    a.action();
                    setOpen(false);
                  }}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors duration-100 ${
                    i === activeIdx ? "" : ""
                  }`}
                  style={{
                    background:
                      i === activeIdx ? "rgba(4,146,251,0.1)" : "transparent",
                    color:
                      i === activeIdx
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                  }}
                >
                  <span className="font-body text-sm flex-1">{a.label}</span>
                  <span
                    className="font-label text-[10px] uppercase tracking-[0.08em] shrink-0"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {a.section}
                  </span>
                  {i === activeIdx && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#0492fb]" />
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div
              className="flex items-center gap-4 px-5 py-3 border-t"
              style={{ borderColor: "var(--border-dim)" }}
            >
              <span
                className="flex items-center gap-1.5 font-label text-[10px] uppercase tracking-[0.08em]"
                style={{ color: "var(--text-muted)" }}
              >
                <Command className="w-3 h-3" />K
                <span style={{ color: "var(--text-muted)" }}>toggle</span>
              </span>
              <span
                className="font-label text-[10px] uppercase tracking-[0.08em]"
                style={{ color: "var(--text-muted)" }}
              >
                ↑↓ navigate · ↵ select · esc close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
