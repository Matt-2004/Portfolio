"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "@/lib/animations";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.section
      id="home"
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
    >
      <div className="flex items-center gap-4 mb-6">
        <span
          className="text-xs font-bold tracking-[0.25em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          About
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </div>

      <div className="leading-7 text-sm" style={{ color: "var(--text-body)" }}>
        <p>
          Hi, I&apos;m a second-year Computer Science student and a Front-End
          Developer who enjoys building modern, scalable web applications. I
          primarily work with Next.js and React to create responsive and
          user-friendly interfaces. Beyond the frontend, I&apos;m also
          experienced in backend development using Node.js and database
          technologies like MongoDB and MySQL. I have built RESTful APIs,
          implemented secure authentication systems, and handled deployment and
          debugging in real-world environments. With a solid foundation in
          computer science, I aim to write clean, efficient, and scalable code
          while continuously improving my technical and problem-solving skills.
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.p
              key="extra"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-3"
            >
              While I have not yet gained formal work experience, my hands-on
              approach to learning has allowed me to tackle real-world
              challenges and continuously improve my craft. I am excited to
              contribute my skills to collaborative projects and continue
              growing as a developer.
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 text-xs font-bold tracking-widest uppercase text-[#FC6736] border border-[#FC6736]/40 px-4 py-1.5 rounded-full hover:bg-[#FC6736] hover:text-white transition-colors duration-200"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          {expanded ? "Show less" : "Read more"}
        </motion.button>
      </div>
    </motion.section>
  );
};

export default About;
