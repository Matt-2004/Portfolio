"use client";
import { motion } from "framer-motion";
import { charReveal } from "../../lib/animations";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  gradient?: boolean;
  delay?: number;
}

export default function SplitText({
  text,
  className = "",
  as: Tag = "h1",
  gradient = false,
  delay = 0,
}: SplitTextProps) {
  return (
    <Tag
      className={`${className} ${gradient ? "text-gradient" : ""}`}
      aria-label={text}
    >
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            key={i}
            className="inline-block"
            custom={i + delay}
            variants={charReveal}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ),
      )}
    </Tag>
  );
}
