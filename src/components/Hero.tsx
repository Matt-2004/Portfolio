"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import NavbarSelector from "@/components/ui/navbarSelector";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { fadeUp } from "@/lib/animations";

/* ─── Data ────────────────────────────────────────────────────── */
const NAME = "WAI YAN AUNG";
const ROLE = "Full-Stack Developer";
const BIO =
  "I build scalable and performant web applications focused on real-time systems, authentication flows, and clean UI architecture.";

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
  return (
    <section className="w-full lg:w-[60%] sticky top-0 flex justify-center min-h-screen">
      {/* Theme toggle — pinned top-right */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="max-w-full text-center pt-16 px-8 py-8 flex flex-col items-center">
        {/* Profile image */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-[#FC6736] to-orange-300">
            <img
              src="/myImage.png"
              alt={NAME}
              className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover block"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          className="relative cursor-default"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
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
          {ROLE}
        </motion.div>

        {/* Bio */}
        <motion.p
          className="font-medium text-sm max-w-[30rem] min-w-32 mt-6 leading-7 mx-auto px-4"
          style={{ color: "var(--text-body)" }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {BIO}
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
            View Resume
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <NavbarSelector />
      </div>
    </section>
  );
};

export default Hero;
