"use client";
import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Github, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SiFigma } from "react-icons/si";
import { IProject, techColors, projects } from "../lib/data";
import { useLanguage } from "../lib/LanguageContext";
import CaseStudyModal from "./ui/CaseStudyModal";
import ScrollReveal from "./ui/ScrollReveal";
import TechIcon from "./ui/TechIcon";

/* ─── Project Row ────────────────────────────────────────────── */

interface ProjectRowProps extends IProject {
  index: number;
  onOpen: (p: IProject) => void;
}

const ProjectRow = ({ onOpen, ...p }: ProjectRowProps) => {
  const { t } = useLanguage();
  const router = useRouter();
  const isEven = p.index % 2 === 0;
  const num = String(p.index + 1).padStart(2, "0");
  const imageRef = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isDedicatedPage = p.title === "ABACTutor";

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 6, y: x * 6 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const handleOpen = useCallback(() => {
    if (isDedicatedPage) {
      router.push("/projects/abactutor");
    } else {
      onOpen(p);
    }
  }, [isDedicatedPage, onOpen, p, router]);

  return (
    <ScrollReveal>
      <div className="relative group/card mb-20 last:mb-0">
        {/* Decorative number */}
        <div
          className="absolute top-0 select-none font-display text-[clamp(80px,10vw,120px)] font-extrabold leading-[0.7] pointer-events-none"
          style={{
            color: "rgba(252,105,3,0.04)",
            WebkitTextStroke: "1px rgba(252,105,3,0.3)",
            left: isEven ? "-2%" : "auto",
            right: isEven ? "auto" : "-2%",
            top: "-10%",
          }}
        >
          {num}
        </div>

        {/* Row */}
        <div
          className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center`}
        >
          {/* Image */}
          <motion.div
            className={`relative md:col-span-7 ${
              isEven ? "md:order-1" : "md:order-2"
            }`}
          >
            <button
              ref={imageRef}
              onClick={handleOpen}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="image-frame block w-full group/img relative"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition:
                  tilt.x === 0 && tilt.y === 0
                    ? "transform 0.5s ease-out"
                    : "transform 0.1s ease-out",
              }}
              data-cursor-hover
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    quality={90}
                    className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                    priority={p.index === 0}
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

                {/* Hover reveal */}
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/35 transition-all duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover/img:opacity-100 translate-y-6 group-hover/img:translate-y-0 transition-all duration-400 flex items-center gap-2 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/15 text-white font-semibold text-sm">
                    <Eye className="w-4 h-4" />
                    {t.projects.viewCaseStudy}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "#fc6903",
                  }}
                />
              </div>
            </button>
          </motion.div>

          {/* Content */}
          <div
            className={`md:col-span-5 space-y-6 ${
              isEven ? "md:order-2" : "md:order-1"
            } ${isEven ? "md:pl-4" : "md:pr-4"}`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="font-label text-[10px] uppercase tracking-[0.15em] text-[#fc6903]">
                Project {num}
              </span>
              <div className="h-px w-8 bg-[#fc6903]/40" />
            </div>

            {/* Title */}
            <h3
              className="font-display text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.05] tracking-[-0.02em]"
              style={{ color: "var(--text-primary)" }}
            >
              {p.title}
            </h3>

            {/* Key metric callout */}
            {p.caseStudy.metrics[0] && (
              <p className="font-label text-[11px] uppercase tracking-[0.06em] text-[#fc6903]">
                {p.caseStudy.metrics[0]}
              </p>
            )}

            {/* Description */}
            <p
              className="font-body font-light text-base leading-relaxed max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              {p.overview}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
              {p.techStack.map((tech, i) => {
                const brand = techColors[tech] || "#0492fb";
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-label font-semibold rounded-full border uppercase tracking-[0.1em]"
                    style={{
                      background: `${brand}12`,
                      color: brand,
                      borderColor: `${brand}33`,
                    }}
                  >
                    <TechIcon name={tech} className="w-3 h-3 shrink-0" />
                    {tech}
                  </span>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleOpen}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200"
                style={{
                  borderColor: "var(--text-primary)",
                  color: "var(--text-primary)",
                }}
                data-cursor-hover
              >
                <Eye className="w-4 h-4" />
                {t.projects.viewCaseStudy}
              </button>
              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border hover:bg-white/5 transition-all duration-200"
                  style={{
                    borderColor: "var(--border-dim)",
                    color: "var(--text-secondary)",
                  }}
                  data-cursor-hover
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {p.figmaUrl !== undefined && (
                <a
                  href={p.figmaUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border hover:bg-white/5 transition-all duration-200"
                  style={{
                    borderColor: "var(--border-dim)",
                    color: "var(--text-secondary)",
                  }}
                  data-cursor-hover
                >
                  <SiFigma className="w-4 h-4" />
                </a>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border hover:bg-violet/10 hover:border-violet/30 hover:text-violet transition-all duration-200"
                  style={{
                    borderColor: "var(--border-dim)",
                    color: "var(--text-secondary)",
                  }}
                  data-cursor-hover
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

/* ─── Project Section ────────────────────────────────────────── */

const Projects = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<IProject | null>(null);

  return (
    <>
      <section
        id="work"
        className="relative py-24 md:py-32 px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-16 md:mb-20">
              <span
                className="font-label text-label uppercase tracking-[0.12em] shrink-0"
                style={{ color: "var(--text-muted)" }}
              >
                {t.projects.title}
              </span>
              <div className="flex-1 h-px" style={{ background: "#fc6903", opacity: 0.3 }} />
              <span
                className="font-label text-label uppercase tracking-[0.12em] shrink-0"
                style={{ color: "var(--text-muted)" }}
              >
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </ScrollReveal>

          {/* Project rows */}
          <div className="space-y-8">
            {projects.map((p, i) => {
              const translated = t.projects.items[i] || p;
              return (
                <ProjectRow
                  key={p.title}
                  {...p}
                  title={translated.title}
                  overview={translated.overview}
                  index={i}
                  onOpen={setSelected}
                />
              );
            })}
          </div>

        </div>
      </section>

      <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Projects;
