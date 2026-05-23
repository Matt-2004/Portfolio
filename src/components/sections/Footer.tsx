"use client";
import { useLanguage } from "../../lib/LanguageContext";

const sections = ["work", "about", "contact"] as const;

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t" style={{ borderColor: "var(--border-dim)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-xl font-extrabold tracking-[-0.03em] text-black/30 hover:text-black transition-colors duration-200"
        >
          W
        </button>

        <div className="flex items-center gap-6">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-label text-[10px] uppercase tracking-[0.1em] text-black/40 hover:text-black transition-colors duration-200"
            >
              {t.nav[id]}
            </button>
          ))}
        </div>

        <p className="font-label text-[10px] uppercase tracking-[0.1em] text-black/30">
          {t.footer.text}
        </p>
      </div>
    </footer>
  );
}
