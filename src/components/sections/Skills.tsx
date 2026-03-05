"use client";
import { motion } from "framer-motion";
import { catColors, catStyle, skillItems } from "@/lib/data";
import { fadeInUp, springPill, staggerContainer } from "@/lib/animations";
import Title from "@/components/ui/Title";

const Skills = () => (
  <motion.section
    id="skills"
    className="py-16 border-b rounded-xl px-5 -mx-5"
    style={{
      borderColor: "var(--border-subtle)",
      background: "var(--bg-section)",
    }}
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
          variants={springPill}
          whileHover={{ y: -2, scale: 1.05 }}
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${catStyle[cat]} cursor-default`}
        >
          {label}
        </motion.span>
      ))}
    </motion.div>

    {/* Legend */}
    <div className="flex flex-wrap gap-4 mt-5">
      {Object.keys(catColors).map((cat) => (
        <div
          key={cat}
          className="flex items-center gap-1.5 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <span className={`w-2 h-2 rounded-full ${catColors[cat]}`} />
          {cat}
        </div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
