"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { useLanguage } from "../../lib/LanguageContext";
import ScrollReveal from "../ui/ScrollReveal";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-20">
            <span
              className="font-label text-label uppercase tracking-[0.12em]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.contact.title}
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "var(--border-dim)" }}
            />
          </div>
        </ScrollReveal>
      </div>

      <div className="text-center max-w-2xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2
            className="font-display text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {t.contact.cta}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p
            className="font-body font-light text-lg leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.contact.sub}
          </p>
          <p className="font-label text-[11px] uppercase tracking-[0.1em] mb-12" style={{ color: "var(--text-muted)" }}>
            Based in Bangkok, Thailand · Open to remote & relocation
          </p>
        </ScrollReveal>

        {/* Email — large Syne type */}
        <ScrollReveal>
          <motion.a
            href="waiyanaung.mas.dev@gmail.com"
            className="inline-block font-display text-[clamp(28px,4vw,40px)] font-bold leading-none mb-12 transition-colors duration-200"
            style={{ color: "var(--text-primary)" }}
            whileHover={{ color: "#fc6903" }}
            data-cursor-hover
          >
            waiyanaung.mas.dev@gmail.com
          </motion.a>
        </ScrollReveal>

        {/* Social handles */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-6">
            {[
              {
                name: "GitHub",
                href: "https://github.com/Matt-2004",
                icon: SiGithub,
              },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/mas200418/",
                icon: FaLinkedinIn,
              },
              {
                name: "Email",
                href: "mailto:mas200418@outlook.com",
                icon: Mail,
              },
            ].map(({ name, href, icon: Icon }) => (
              <motion.a
                key={name}
                href={href}
                target={name !== "Email" ? "_blank" : undefined}
                rel={name !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={name}
                className="w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-200 hover:border-violet hover:text-violet"
                style={{
                  borderColor: "var(--border-mid)",
                  color: "var(--text-secondary)",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
