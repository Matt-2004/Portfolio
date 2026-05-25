"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { useLanguage } from "../lib/LanguageContext";
import Image from "next/image";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Matt-2004", icon: SiGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mas200418/",
    icon: FaLinkedinIn,
  },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative text-white bg-brand min-h-dvh overflow-hidden"
    >
      {/* Ambient soft radial highlight behind portrait */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 42%, rgba(255,255,255,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 min-h-dvh flex flex-col">
        {/* ── Top row: headline left / social right ── */}
        <div className="flex items-start justify-between pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-accent text-[clamp(52px,10vw,80px)] font-extrabold leading-[0.95] tracking-wide uppercase">
              {t.hero.role.split(" ").map((word, i, arr) => (
                <span key={i} className={i < arr.length - 1 ? "block" : ""}>
                  {word}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex flex-col items-center gap-3 shrink-0 ml-8"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="font-label text-[10px] uppercase tracking-[0.15em] text-white/75">
              Connect
            </span>
            <div className="flex gap-1.5">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/65 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Middle: Portrait with refined animated rings ── */}
        <motion.div
          className="flex-1 flex items-center justify-center -mt-6 md:-mt-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <div className="relative">
            {/* Soft radial glow behind portrait */}
            <div
              className="absolute -inset-16 md:-inset-24 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)",
              }}
            />

            {/* Ring 1 — outer, slow CW rotation */}
            <motion.div
              className="absolute -inset-8 md:-inset-12 rounded-full border border-white/[0.07]"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />

            {/* Ring 2 — mid, CCW rotation */}
            <motion.div
              className="absolute -inset-4 md:-inset-6 rounded-full border border-white/[0.1]"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />

            {/* Ring 3 — inner, dashed accent, CW */}
            <motion.div
              className="absolute -inset-1.5 md:-inset-2 rounded-full border border-white/[0.15]"
              style={{ borderStyle: "dashed" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating portrait */}
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] rounded-full overflow-hidden border border-white/10"
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/my-profile-image.png"
                alt="Wai Yan Aung"
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 360px"
                className="object-cover "
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Bottom row: intro left / CTAs right ── */}
        <div className="flex items-end justify-between pb-10 md:pb-14">
          <motion.div
            className="max-w-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="font-label uppercase tracking-[0.2em] text-white/90 font-semibold mb-3">
              {t.hero.greeting}
            </p>
            <p className="font-body  md:text-lg leading-relaxed text-white/90">
              {t.hero.shortIntro}
            </p>
          </motion.div>

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
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-accent text-black hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-black/10"
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
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/25 text-white hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300"
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
          <span className="font-label text-[10px] uppercase tracking-[0.15em] text-white/75">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/20"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
