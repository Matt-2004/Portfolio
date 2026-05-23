"use client";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiReactquery,
  SiAxios,
  SiZod,
  SiReacthookform,
  SiReactrouter,
  SiRedux,
  SiCloudinary,
  SiSupabase,
  SiJest,
  SiGithubactions,
  SiDocker,
  SiVercel,
  SiGit,
  SiPostgresql,
} from "react-icons/si";
import { FlaskConical, Radio, Gauge, Globe } from "lucide-react";
import { staggerContainer, springPill } from "../../lib/animations";
import { skillItems } from "../../lib/data";
import { useLanguage } from "../../lib/LanguageContext";
import ScrollReveal from "../ui/ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  tailwind: SiTailwindcss,
  reactquery: SiReactquery,
  axios: SiAxios,
  zod: SiZod,
  reacthookform: SiReacthookform,
  reactrouter: SiReactrouter,
  redux: SiRedux,
  cloudinary: SiCloudinary,
  supabase: SiSupabase,
  jest: SiJest,
  playwright: FlaskConical,
  jestaxe: Gauge,
  lighthouse: Globe,
  docker: SiDocker,
  vercel: SiVercel,
  githubactions: SiGithubactions,
  git: SiGit,
  postgresql: SiPostgresql,
  restapi: Radio,
  signalr: Radio,
};

const catOrder = [
  "Languages & Frameworks",
  "Libraries & Tools",
  "Testing & Quality",
  "Infrastructure",
] as const;

export default function About() {
  const { t } = useLanguage();

  const grouped = catOrder.map((cat) => ({
    cat,
    items: skillItems.filter((s) => s.cat === cat),
  }));

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-8"
      style={{ backgroundColor: "#fc6903" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <ScrollReveal>
          <h2 className="font-display text-[clamp(40px,6vw,64px)] font-extrabold leading-[0.95] tracking-[-0.02em] text-black mb-6">
            {t.about.title}
          </h2>
        </ScrollReveal>

        {/* Stats + Bio — side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 mb-20">
          {/* Stats column */}
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { value: "32K", label: "TypeScript LOC", dominant: true },
                { value: "300+", label: "Automated Tests", dominant: false },
                { value: "100", label: "Lighthouse Score", dominant: false },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-3">
                  <span
                    className={`font-display font-extrabold tracking-[-0.02em] text-black ${s.dominant ? "text-5xl" : "text-2xl opacity-60"}`}
                  >
                    {s.value}
                  </span>
                  <span
                    className={`font-label uppercase tracking-[0.08em] ${s.dominant ? "text-xs text-black/60" : "text-[10px] text-black/40"}`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Bio column */}
          <div className="lg:col-span-3 space-y-4">
            <ScrollReveal>
              <p className="font-body text-base leading-relaxed text-black/70">
                {t.about.p1}
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p className="font-body text-base leading-relaxed text-black/70">
                {t.about.p2}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {grouped.map(({ cat, items }) =>
            items.length === 0 ? null : (
              <ScrollReveal key={cat}>
                <div>
                  <h3 className="font-label text-[11px] uppercase tracking-[0.15em] text-black mb-4">
                    {t.skills.categories[
                      cat as keyof typeof t.skills.categories
                    ] || cat}
                  </h3>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer(40)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {items.map(({ label, iconKey }) => {
                      const Icon = iconMap[iconKey];
                      return (
                        <motion.span
                          key={label}
                          variants={springPill}
                          whileHover={{ y: -2, scale: 1.05 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border cursor-default transition-all duration-200 bg-black/10 text-black border-black/20"
                          data-cursor-hover
                        >
                          {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                          {label}
                        </motion.span>
                      );
                    })}
                  </motion.div>
                </div>
              </ScrollReveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
