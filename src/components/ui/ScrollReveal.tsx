"use client";
import { motion } from "framer-motion";
import { fadeLift, staggerContainer, fadeLiftChild } from "@/lib/animations";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  once?: boolean;
  margin?: string;
}

export default function ScrollReveal({
  children,
  className,
  stagger = false,
  once = true,
  margin = "-80px",
}: ScrollRevealProps) {
  if (stagger) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin }}
        variants={staggerContainer(80)}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={fadeLiftChild}>
                {child}
              </motion.div>
            ))
          : children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={fadeLift}
    >
      {children}
    </motion.div>
  );
}
