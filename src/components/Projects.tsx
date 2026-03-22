"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Title from "@/components/ui/Title";
import { fadeInUp } from "@/lib/animations";
import { projects, techCatStyle } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { Github } from "lucide-react";

// Lazy load below-the-fold sections to drastically improve initial JS payload and TTI
const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

// Completely disable SSR for the heavy GitHub calendar since it relies on client theme anyway
const GithubGraph = dynamic(() => import("@/components/sections/GithubGraph"), {
  ssr: false,
});

/* ─── Project row ─────────────────────────────────────────────── */
interface ProjectRowProps {
  image: string;
  title: string;
  overview: string;
  techStack: string[];
  url: string;
  githubUrl?: string;
  index: number;
  isLast: boolean;
}

const ProjectRow = ({
  image,
  title,
  overview,
  techStack,
  url,
  githubUrl,
  index,
  isLast,
}: ProjectRowProps) => {
  return (
    <motion.div
      className={`group flex flex-col gap-5 py-8 border-b ${isLast ? "border-b-0" : ""}`}
      style={{ borderColor: "var(--border)" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeInUp}
    >
      {/* Title */}
      <div className="flex items-center justify-between w-full mb-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2"
        >
          <h3
            className="text-2xl md:text-3xl font-bold group-hover/link:text-[#FC6736] transition-colors duration-200"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 group-hover/link:text-[#FC6736] group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all duration-200"
            style={{ color: "var(--text-body)" }}
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source Code"
            className="flex items-center justify-center p-2 rounded-full bg-[var(--bg-section)] border border-[var(--border)] hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-300"
            style={{ color: "var(--text-body)" }}
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Image | Overview */}
      <div className="w-full flex flex-col gap-6 items-start">
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full overflow-hidden rounded-xl shadow-lg relative block shrink-0 group aspect-[16/9]"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            quality={85}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={index === 0} // Only prioritize the first project image
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 bg-white/10 dark:bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white font-bold tracking-wide text-sm shadow-xl">
              <span>Visit Site</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </motion.a>

        <p
          className="text-base leading-relaxed w-full"
          style={{ color: "var(--text-body)" }}
        >
          {overview}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 w-full mt-2">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${techCatStyle[tech] ?? ""}`}
            style={
              !techCatStyle[tech]
                ? {
                    background: "var(--pill-bg)",
                    color: "var(--pill-text)",
                    borderColor: "var(--pill-border)",
                  }
                : undefined
            }
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Right panel ─────────────────────────────────────────────── */
const Projects = () => {
  const { t } = useLanguage();

  return (
    <div
      className="w-full flex justify-center lg:border-l"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="w-full space-y-4 pt-16 lg:pt-24 pb-12 px-6 sm:px-10 md:px-16 max-w-4xl">
        {/* About */}
        <div
          className="pb-12 border-b"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <About />
        </div>

        {/* Skills */}
        <div
          className="py-8 border-b"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <Skills />
        </div>

        {/* Github Graph */}
        <GithubGraph />

        {/* Projects */}
        <section id="projects" className="py-12">
          <Title text={t.projects.title} />
          {projects.map((p, i) => {
            const translatedProject = t.projects.items[i] || p;
            return (
              <ProjectRow
                key={p.title}
                {...p}
                title={translatedProject.title}
                overview={translatedProject.overview}
                index={i}
                isLast={i === projects.length - 1}
              />
            );
          })}
        </section>

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <footer
          className="py-8 text-center text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          {t.footer.text}
        </footer>
      </div>
    </div>
  );
};

export default Projects;
