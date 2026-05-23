"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useLanguage } from "../lib/LanguageContext";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Matt-2004", icon: SiGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mas200418/",
    icon: Linkedin,
  },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden"
      style={{ backgroundColor: "#fc6903" }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 min-h-[100dvh] flex flex-col">
        {/* ── Top row: headline left / social right ── */}
        <div className="flex items-start justify-between pt-28 md:pt-36">
          {/* Headline — brutalist, oversized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[clamp(52px,10vw,80px)] font-extrabold leading-[0.82] tracking-[-0.03em] text-black uppercase">
              {t.hero.role.split(" ").map((word, i, arr) => (
                <span key={i} className={i < arr.length - 1 ? "block" : ""}>
                  {word}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Social — floating top-right */}
          <motion.div
            className="flex flex-col items-center gap-2 shrink-0 ml-8"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="font-mono font-bold ">Let's Connect</div>
            <div className="flex gap-2 justify-start">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-black/40 text-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Middle: Portrait centered with blue ring accent ── */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <div className="relative">
            {/* Geometric blue ring */}
            <div className="absolute -inset-8 md:-inset-12 rounded-full border-[3px] border-[#0369A1]/40" />
            <div className="absolute -inset-2 md:-inset-4 rounded-full border border-[#0369A1]/25" />

            {/* Shadow */}
            <div className="absolute -inset-6 rounded-full bg-black/8 blur-3xl" />

            {/* Portrait */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-black/10">
              <Image
                src="/my-profile-image.png"
                alt="Wai Yan Aung"
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 288px"
                className="object-cover scale-110"
              />
            </div>
          </div>
        </motion.div>

        {/* ── Bottom row: intro + CTAs ── */}
        <div className="flex items-end justify-between pb-10 md:pb-14">
          {/* Intro text */}
          <motion.h3
            className="max-w-sm text-sm md:text-base leading-relaxed font-medium text-black/70"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="font-mono font-bold">HI, I'm WAI YAN AUNG</p>
            {t.hero.shortIntro}
          </motion.h3>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-3 shrink-0 ml-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-black text-white hover:bg-black/80 transition-colors duration-200"
            >
              {t.hero.viewResume}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200"
            >
              {t.hero.viewProjects}
            </button>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="font-label text-[10px] uppercase tracking-[0.15em] text-black/60">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-black/30"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
