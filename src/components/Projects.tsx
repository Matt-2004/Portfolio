"use client";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { About } from "./Hero";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Section heading ─────────────────────────────────────────── */
export const Title = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
      {text}
    </span>
    <div className="flex-1 h-px bg-white/10" />
  </div>
);

/* ─── Skills data ─────────────────────────────────────────────── */
const skillItems = [
  { label: "React", cat: "Frontend" },
  { label: "NextJS", cat: "Frontend" },
  { label: "Typescript", cat: "Frontend" },
  { label: "Tailwind CSS", cat: "Frontend" },
  { label: "NodeJS", cat: "Backend" },
  { label: "ExpressJS", cat: "Backend" },
  { label: "Golang", cat: "Backend" },
  { label: "Firebase", cat: "Backend" },
  { label: "MongoDB", cat: "Database" },
  { label: "PostgreSQL", cat: "Database" },
  { label: "MySQL", cat: "Database" },
];

const catStyle: Record<string, string> = {
  Frontend: "bg-orange-500/10 text-orange-300 border-orange-400/20",
  Backend: "bg-sky-500/10   text-sky-300   border-sky-400/20",
  Database: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
};

/* ─── Skills section ──────────────────────────────────────────── */
const Skills = () => (
  <motion.section
    id="skills"
    className="py-16 border-b border-white/5 rounded-xl px-5 -mx-5 bg-white/[0.02]"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={fadeInUp}
  >
    <Title text="Skills" />
    <motion.div
      className="flex flex-wrap gap-2"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skillItems.map(({ label, cat }, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 22 } },
          }}
          whileHover={{ y: -2, scale: 1.05 }}
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${catStyle[cat]} cursor-default`}
        >
          {label}
        </motion.span>
      ))}
    </motion.div>
    <div className="flex gap-5 mt-5">
      {["Frontend", "Backend", "Database"].map((cat) => (
        <div key={cat} className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className={`w-2 h-2 rounded-full ${cat === "Frontend" ? "bg-orange-400" :
            cat === "Backend" ? "bg-sky-400" : "bg-emerald-400"
            }`} />
          {cat}
        </div>
      ))}
    </div>
  </motion.section>
);

/* ─── Project row ─────────────────────────────────────────────── */
interface IProject {
  image: string;
  title: string;
  overview: string;
  techStack: string[];
  url: string;
  index: number;
}

const ProjectRow = ({ image, title, overview, techStack, url, index }: IProject) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className={`group flex flex-col md:flex-row gap-8 items-center py-14 border-b border-white/5 ${isEven ? "" : "md:flex-row-reverse"
        }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeInUp}
    >
      {/* Image */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg relative block"
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
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#FC6736]/0 group-hover:bg-[#FC6736]/10 transition-colors duration-300 rounded-xl" />
      </motion.a>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FC6736]">
            Featured Project
          </span>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2"
        >
          <h3 className="text-2xl font-bold text-white group-hover/link:text-[#FC6736] transition-colors duration-200">
            {title}
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            className="w-5 h-5 text-gray-400 group-hover/link:text-[#FC6736] group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all duration-200">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
          </svg>
        </a>

        <p className="text-gray-400 text-sm leading-relaxed">{overview}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {techStack.map((tech, i) => (
            <span key={i} className="px-2.5 py-1 text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};



/* ─── Contact section ─────────────────────────────────────────── */
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  console.log("templateId: ", templateId);
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setErrorMsg("");




    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg("Email service is not configured.");
      setStatus("error");
      setTimeout(() => { setStatus("idle"); setErrorMsg(""); }, 5000);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey }
      );
      console.log("EmailJS success:", result.text);
      setStatus("sent");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err);
      console.error("EmailJS error:", msg);
      setErrorMsg(msg);
      setStatus("error");
      setTimeout(() => { setStatus("idle"); setErrorMsg(""); }, 5000);
    }
  };

  const fieldClass =
    "w-full bg-transparent border-b border-white/10 focus:border-[#FC6736] outline-none py-2.5 text-sm text-gray-200 placeholder-gray-600 transition-colors duration-200";

  return (
    <motion.section
      id="contact"
      className="py-16 border-t border-white/5 rounded-xl px-5 -mx-5 bg-white/[0.02]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeInUp}
    >
      <Title text="Get In Touch" />
      <div className="max-w-lg">
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          I am currently looking for new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is always open.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-gray-500">Name</label>
              <input id="name" name="from_name" value={formData.from_name} onChange={handleChange}
                placeholder="John Doe" className={fieldClass} required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-gray-500">Email</label>
              <input id="email" name="from_email" type="email" value={formData.from_email} onChange={handleChange}
                placeholder="john@example.com" className={fieldClass} required />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-gray-500">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}
              placeholder="Your message..." rows={4}
              className={`${fieldClass} resize-none`} required />
          </div>

          <div className="flex flex-col gap-3">
            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#FC6736] text-[#FC6736] text-sm font-semibold tracking-wide hover:bg-[#FC6736] hover:text-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed w-fit"
              whileHover={{ scale: status === "idle" ? 1.04 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {status === "sending" && (
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              )}
              {status === "sending" ? "Sending…" : status === "sent" ? "Message Sent ✓" : "Send Message"}
            </motion.button>

            <AnimatePresence>
              {status === "sent" && (
                <motion.p
                  key="sent"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="text-emerald-400 text-xs font-medium"
                >
                  ✓ Thanks! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="text-red-400 text-xs font-medium"
                >
                  ✕ {errorMsg || "Something went wrong. Please try again."}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

/* ─── Root component ──────────────────────────────────────────── */
const Projects = () => {
  const projects = [
    {
      image: "/masmax.png",
      title: "MASMAX",
      url: "https://masmax.vercel.app/",
      overview:
        "MASMAX provides a reliable and user-friendly experience for moviegoers, combining online ticket purchasing with top-tier security measures.",
      techStack: ["React", "Vite", "Tailwind CSS", "Typescript", "Golang", "MongoDB"],
    },
    {
      image: "/gearup.png",
      title: "GearUp",
      url: "https://gear-up-opal.vercel.app/",
      overview:
        "Gear Up is a car marketing and selling platform featuring vehicle listings, real-time chat, appointment booking, role-based dashboards, and secure authentication for a seamless buying and selling experience.",
      techStack: ["React", "NextJS", "Tailwind CSS", "Typescript"],
    },
  ];

  return (
    <div className="w-full flex justify-center lg:border-l lg:border-white/5">
      <div className="w-full px-4 sm:px-8 md:px-14 max-w-3xl">
        {/* About */}
        <div className="py-16 border-b border-white/5">
          <About />
        </div>

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <section id="projects" className="pt-16 pb-4 rounded-xl px-5 -mx-5 bg-white/[0.03]">
          <Title text="Projects" />
          {projects.map((p, i) => (
            <ProjectRow key={i} {...p} index={i} />
          ))}
        </section>

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-gray-600">
          Designed &amp; Built by Wai Yan Aung
        </footer>
      </div>
    </div>
  );
};

export default Projects;
