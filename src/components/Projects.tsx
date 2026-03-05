"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Title from "@/components/ui/Title";
import { fadeInUp } from "@/lib/animations";
import { projects, techCatStyle } from "@/lib/data";

/* ─── Project row ─────────────────────────────────────────────── */
interface ProjectRowProps {
  image: string;
  title: string;
  overview: string;
  techStack: string[];
  url: string;
  index: number;
  isLast: boolean;
}

const ProjectRow = ({ image, title, overview, techStack, url, index, isLast }: ProjectRowProps) => {
  const isEven = index % 2 === 0;

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
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center gap-2 mb-2 w-full"
      >
        <h3
          className="text-3xl font-bold group-hover/link:text-[#FC6736] transition-colors duration-200"
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

      {/* Image | Overview */}
      <div
        className={`w-full flex flex-col md:flex-row gap-6 items-start ${
          isEven ? "" : "md:flex-row-reverse"
        }`}
      >
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-2/5 overflow-hidden rounded-xl shadow-lg relative block shrink-0"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-[#FC6736]/0 group-hover:bg-[#FC6736]/10 transition-colors duration-300 rounded-xl" />
        </motion.a>

        <p
          className="text-sm leading-relaxed md:w-3/5"
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
                ? { background: "var(--pill-bg)", color: "var(--pill-text)", borderColor: "var(--pill-border)" }
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
const Projects = () => (
  <div
    className="w-full flex justify-center lg:border-l"
    style={{ borderColor: "var(--border-subtle)" }}
  >
    <div className="w-full space-y-2 px-4 sm:px-8 md:px-14 max-w-4xl">

      {/* About */}
      <div
        className="py-16 border-b rounded-xl px-5 -mx-5"
        style={{ borderColor: "var(--border-subtle)", background: "var(--bg-section)" }}
      >
        <About />
      </div>

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <section
        id="projects"
        className="pt-16 pb-4 rounded-xl px-5 -mx-5"
        style={{ background: "var(--bg-section-hi)" }}
      >
        <Title text="Featured Projects" />
        {projects.map((p, i) => (
          <ProjectRow
            key={p.title}
            {...p}
            index={i}
            isLast={i === projects.length - 1}
          />
        ))}
      </section>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer
        className="py-8 text-center text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        Designed &amp; Built by Wai Yan Aung
      </footer>
    </div>
  </div>
);

export default Projects;
