"use client";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Lightbulb,
  BarChart3,
  Target,
} from "lucide-react";
import { IProject, techColors } from "../../lib/data";
import { useLanguage } from "../../lib/LanguageContext";
import TechIcon from "./TechIcon";

interface Props {
  project: IProject | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: Props) {
  const { t } = useLanguage();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!project) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-start justify-center overflow-y-auto py-12 px-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="relative w-full max-w-4xl rounded-2xl border overflow-hidden"
            style={{
              backgroundColor: "var(--bg-elevated)",
              borderColor: "var(--border-mid)",
            }}
            variants={{
              hidden: { opacity: 0, y: 32, scale: 0.97 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label={t.caseStudy.close}
              className=" absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/10 cursor-pointer backdrop-blur-lg text-white/80 shadow-lg shadow-black/20 transition-all duration-300 ease-out hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0492fb]focus-visible:ring-offset-2
focus-visible:ring-offset-black"
              style={{
                borderColor: "var(--border-mid)",
                color: "var(--text-primary)",
              }}
              data-cursor-hover
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  quality={95}
                  className="object-cover"
                  priority
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(4,146,251,0.06)" }}
                >
                  <span
                    className="font-label text-label uppercase tracking-[0.12em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Screenshot coming soon
                  </span>
                </div>
              )}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, var(--bg-base) 0%, transparent 35%, transparent 100%)`,
                }}
              />
            </div>

            <div className="px-6 sm:px-10 pb-16 -mt-16 relative">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <p className="font-label text-label uppercase tracking-[0.12em] mb-1.5">
                    {t.caseStudy.caseStudy}
                  </p>
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="h-11 sm:h-14 w-auto object-contain object-left"
                    />
                  ) : (
                    <h2
                      className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h2>
                  )}
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.caseStudy.liveSite}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-accent-light text-white hover:bg-violet/80 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#0492fb] focus-visible:outline-none"
                      data-cursor-hover
                    >
                      {t.caseStudy.liveSite}{" "}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.caseStudy.sourceCode}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border hover:bg-white/5 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#0492fb] focus-visible:outline-none"
                      style={{
                        borderColor: "var(--border-mid)",
                        color: "var(--text-secondary)",
                      }}
                      data-cursor-hover
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />{" "}
                      {t.caseStudy.sourceCode}
                    </a>
                  )}
                  {!project.url && !project.githubUrl && (
                    <span
                      className="px-4 py-2 rounded-full text-sm font-semibold border"
                      style={{
                        borderColor: "var(--border-mid)",
                        color: "var(--text-muted)",
                      }}
                    >
                      UX Research Project
                    </span>
                  )}
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.techStack.map((tech, i) => {
                  const brand = techColors[tech] || "#0492fb";
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-label font-semibold rounded-full border uppercase tracking-[0.08em]"
                      style={{
                        background: `${brand}12`,
                        color: brand,
                        borderColor: `${brand}33`,
                      }}
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                      {tech}
                    </span>
                  );
                })}
              </div>

              {/* Role */}
              <section
                className="mb-10 p-6 rounded-xl border"
                style={{
                  borderColor: "var(--border-dim)",
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-[#0492fb]" />
                  <h3
                    className="font-label text-label uppercase tracking-[0.1em]"
                    style={{ color: "#0492fb" }}
                  >
                    {t.caseStudy.role}
                  </h3>
                </div>
                <p
                  className="font-body font-light text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.caseStudy.role}
                </p>
              </section>

              {/* Grid: Problem + Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb
                      className="w-4 h-4"
                      style={{ color: "var(--text-muted)" }}
                    />
                    <h3
                      className="font-label text-label uppercase tracking-[0.1em]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {t.caseStudy.challenge}
                    </h3>
                  </div>
                  <p
                    className="font-body font-light text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.caseStudy.challenge}
                  </p>
                </section>
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers
                      className="w-4 h-4"
                      style={{ color: "var(--text-muted)" }}
                    />
                    <h3
                      className="font-label text-label uppercase tracking-[0.1em]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {t.caseStudy.approach}
                    </h3>
                  </div>
                  <p
                    className="font-body font-light text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.caseStudy.approach}
                  </p>
                </section>
              </div>

              {/* Architecture */}
              <section className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Layers
                    className="w-4 h-4"
                    style={{ color: "var(--text-muted)" }}
                  />
                  <h3
                    className="font-label text-label uppercase tracking-[0.1em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.caseStudy.architecture}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.caseStudy.architecture.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 px-4 py-3 rounded-lg border"
                      style={{
                        borderColor: "var(--border-dim)",
                        background: "rgba(255,255,255,0.01)",
                      }}
                    >
                      <span
                        className="mt-0.5 text-[10px] font-label shrink-0"
                        style={{ color: "#0492fb" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="font-body font-light text-xs leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {a}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Highlights */}
              <section className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3
                    className="w-4 h-4"
                    style={{ color: "var(--text-muted)" }}
                  />
                  <h3
                    className="font-label text-label uppercase tracking-[0.1em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.caseStudy.technicalHighlights}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.caseStudy.technicalHighlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 px-4 py-3 rounded-lg border"
                      style={{ borderColor: "var(--border-dim)" }}
                    >
                      <span
                        className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "#0492fb" }}
                      />
                      <span
                        className="font-body font-light text-xs leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Metrics */}
              <section className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3
                    className="w-4 h-4"
                    style={{ color: "var(--text-muted)" }}
                  />
                  <h3
                    className="font-label text-label uppercase tracking-[0.1em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.caseStudy.metrics}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {project.caseStudy.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="px-4 py-4 rounded-xl border text-center"
                      style={{
                        borderColor: "var(--border-dim)",
                        background: "rgba(255,255,255,0.015)",
                      }}
                    >
                      <span
                        className="font-body font-light text-xs leading-relaxed block"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Outcome */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-[#0492fb]" />
                  <h3
                    className="font-label text-label uppercase tracking-[0.1em]"
                    style={{ color: "#0492fb" }}
                  >
                    {t.caseStudy.outcome}
                  </h3>
                </div>
                <p
                  className="font-body font-light text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.caseStudy.outcome}
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
