"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import NavbarSelector from "@/components/ui/navbarSelector";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LangToggle from "@/components/ui/LangToggle";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";

/* ─── Data ────────────────────────────────────────────────────── */
const NAME = "WAI YAN AUNG";
const socialLinks = [
  { name: "GitHub", href: "https://github.com/Matt-2004", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mas200418/",
    icon: Linkedin,
  },
];

/* ─── Hero panel ──────────────────────────────────────────────── */
const Hero = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      className="w-full lg:w-[60%] sticky top-0 flex justify-center min-h-screen overflow-hidden"
    >
      {/* Background glow effects strictly for Hero */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FC6736]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-full text-center pt-24 lg:pt-20 px-8 py-8 flex flex-col items-center z-10 w-full relative">
        {/* Theme and Lang toggle — in document flow for mobile, absolute top-right for desktop */}
        <div className="flex justify-center w-full gap-4 mb-10 lg:mb-0 lg:absolute lg:top-6 lg:right-6 lg:w-auto lg:justify-end z-50">
          <LangToggle />
          <ThemeToggle />
        </div>

        {/* Profile image with animated container */}
        <motion.div
          className="relative mb-8 group"
          initial={{ scale: 0.9, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Outer glowing halo */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#FC6736]/40 to-orange-300/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-tr from-[#FC6736] to-orange-300 shadow-2xl transform transition-transform duration-500 hover:rotate-3">
            <div className="rounded-[2.5rem] overflow-hidden bg-[var(--bg)] transform transition-transform duration-500 -rotate-3 hover:rotate-0 relative w-36 h-36 sm:w-44 sm:h-44">
              <Image
                src="/myImage.png"
                alt={NAME}
                fill
                priority
                fetchPriority="high"
                quality={90}
                sizes="(max-width: 640px) 144px, 176px"
                className="object-cover block scale-110 group-hover:scale-125 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          className="relative cursor-default"
          initial={{ scale: 0.95, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="text-5xl font-extrabold tracking-normal"
            style={{ color: "var(--text-primary)" }}
          >
            {NAME}
          </span>
          <motion.div
            className="mx-auto mt-2 h-[2px] rounded-full bg-gradient-to-r from-[#FC6736] to-orange-300"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          />
        </motion.div>

        {/* Role badge */}
        <motion.div
          className="inline-flex items-center gap-2 mt-5 px-4 py-1.5 rounded-full border border-[#FC6736]/30 bg-[#FC6736]/10 text-[#FC6736] font-semibold text-base tracking-wide"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="w-2 h-2 rounded-full bg-[#FC6736] animate-pulse" />
          {t.hero.role}
        </motion.div>

        {/* Bio */}
        <motion.p
          className="font-medium text-base md:text-lg max-w-[32rem] mt-6 leading-relaxed mx-auto px-4"
          style={{ color: "var(--text-body)" }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {t.hero.bio}
        </motion.p>

        {/* Social icons + ThemeToggle + Resume */}
        <motion.div
          className="w-full space-y-4 mt-8 flex flex-col justify-center items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, href, icon: Icon }, i) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 flex items-center justify-center rounded-full border transition-colors duration-200 hover:border-[#FC6736] hover:bg-[#FC6736]/10 hover:text-white"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-body)",
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6 + i * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-white bg-[#FC6736] font-semibold px-6 py-2.5 rounded-full items-center shadow-sm shadow-[#FC6736]/10 hover:bg-[#e55620] hover:shadow-md hover:shadow-[#FC6736]/20 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {t.hero.viewResume}
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <NavbarSelector />
      </div>
    </section>
  );
};

export default Hero;
