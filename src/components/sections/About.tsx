"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";
import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative bg-brand overflow-hidden py-24 md:py-32 px-6 md:px-8"
    >
      {/* ── Decorative rings — echo of hero portrait rings ── */}
      {/* Large ring — off-right, slow CW */}
      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/[0.04] pointer-events-none"
        style={{ transform: "translate(40%, -50%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Mid ring — counter-rotating */}
      <motion.div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-white/[0.05] pointer-events-none"
        style={{ transform: "translate(-30%, 0)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Soft radial glow behind content */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 40%, rgba(252,105,3,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading area */}
        <div className="mb-20 md:mb-28">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#fc6903]/50" />
              <span className="font-label text-[10px] uppercase tracking-[0.15em] text-white shadow-2xl">
                {t.about.title}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-[clamp(44px,7vw,80px)] font-extrabold leading-[0.92] tracking-[-0.02em] text-accent max-w-3xl">
              {t.about.headline}
            </h2>
          </ScrollReveal>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left column — intro + what I build */}
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="font-body text-lg md:text-xl leading-relaxed text-white/90 max-w-xl">
                {t.about.intro}
              </p>
            </ScrollReveal>

            {/* What I enjoy building */}
            <div className="mt-16 md:mt-20">
              <ScrollReveal>
                <h3 className="font-label text-[10px] uppercase tracking-[0.15em] text-[#fc6903] mb-5">
                  {t.about.whatIBuild.label}
                </h3>
              </ScrollReveal>
              <ul className="space-y-4">
                {t.about.whatIBuild.items.map((item, i) => (
                  <ScrollReveal key={i}>
                    <li className="flex items-start gap-3 group">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#fc6903]/50 shrink-0 transition-all duration-300 group-hover:bg-[#fc6903] group-hover:scale-150" />
                      <span className="font-body md:text-lg text-white/80 leading-relaxed transition-colors duration-300 group-hover:text-white/70">
                        {item}
                      </span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — stats + values */}
          <div className="md:col-span-5">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 mb-16">
              {t.about.stats.map((stat, i) => (
                <ScrollReveal key={i}>
                  <div>
                    <motion.div
                      className="font-display text-[clamp(36px,5vw,56px)] font-extrabold leading-none text-accent mb-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="font-label text-[10px] uppercase tracking-[0.12em] text-white/90 leading-tight max-w-[120px]">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-6">
              {t.about.values.map((v, i) => (
                <ScrollReveal key={i}>
                  <div className="group">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-4 h-px bg-[#fc6903]/40 transition-all duration-300 group-hover:w-6 group-hover:bg-[#fc6903]/70" />
                      <span className="font-label  font-semibold text-accent transition-colors duration-300 group-hover:text-white">
                        {v.label}
                      </span>
                    </div>
                    <p className="font-body text-sm text-white/90 leading-relaxed pl-6.5 transition-colors duration-300 group-hover:text-white/55">
                      {v.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── Availability callout ── */}
        <ScrollReveal>
          <div className="mt-24 md:mt-32 pt-10 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fc6903] opacity-70" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fc6903]" />
              </span>
              <p className="font-body text-sm md:text-base text-white/45 leading-relaxed">
                {t.about.availability}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
