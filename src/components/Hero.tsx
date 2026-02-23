"use client";
import { AnimatePresence, motion } from "framer-motion";
import { JSX, useState } from "react";

import { ArrowDownToLine, Github, Linkedin } from "lucide-react";
import NavbarSelector from "./ui/navbarSelector";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Matt-2004",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mas200418/",
    icon: <Linkedin className="w-5 h-5" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero = () => {


  const role = "Frontend Developer";
  const text =
    "I build scalable and performant web applications focused on real-time systems, authentication flows, and clean UI architecture.";
  const name = "WAI YAN AUNG";

  return (
    <section className="w-full lg:w-[60%] sticky top-0 flex justify-center min-h-screen">
      <div className="max-w-full text-center pt-16 px-8 py-8 flex flex-col items-center">

        {/* Profile image */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {/* Orange border ring */}
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-[#FC6736] to-orange-300">
            <img
              src="/myImage.png"
              alt="Wai Yan Aung"
              className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover block"
            />
          </div>
        </motion.div>
        {/* Animated name */}
        <motion.div
          className="relative cursor-default"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="text-5xl  font-extrabold text-white tracking-normal">
            {name}
          </span>
          {/* Animated underline accent */}
          <motion.div
            className="mx-auto mt-2 h-[2px] rounded-full bg-gradient-to-r from-[#FC6736] to-orange-300"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
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
          {role}
        </motion.div>

        {/* Bio text */}
        <motion.div
          className="font-medium text-gray-400 text-sm max-w-[30rem] min-w-32 mt-6 leading-7 mx-auto px-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {text}
        </motion.div>

        {/* Social icons & CV button */}
        <motion.div
          className="w-full space-y-4 mt-8 flex flex-col justify-center items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {/* GitHub + LinkedIn icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, href, icon }, i) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-[#FC6736] hover:bg-[#FC6736]/10 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.92 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <motion.a
            className="flex gap-2 text-white bg-[#FC6736] font-semibold px-6 py-2.5 rounded-full items-center shadow-sm shadow-[#FC6736]/10 hover:bg-[#e55620] hover:shadow-md hover:shadow-[#FC6736]/20 transition-all duration-200"
            href="/Resume.docx"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            View Resume
            <ArrowDownToLine className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <NavbarSelector />
      </div>
    </section>
  );
};

export const FrontEndStyle =
  'cursor-pointer hover:after:content-["Frontend"] hover:after:bg-[#FC6736] hover:after:text-white hover:after:absolute hover:after:top-[-113%] hover:after:left-0 hover:after:px-[3px]';
export const BackEndStyle =
  'cursor-pointer hover:after:content-["Backend"] hover:after:bg-blue-500 hover:after:text-white hover:after:absolute hover:after:top-[-113%] hover:after:left-0 hover:after:px-[3px]';
export const DatabaseStyle =
  'cursor-pointer hover:after:content-["Database"] hover:after:bg-green-500 hover:after:text-white hover:after:absolute hover:after:top-[-113%] hover:after:left-0 hover:after:px-[3px]';

export const skills = {
  Typescript: FrontEndStyle,
  NodeJS: BackEndStyle,
  Golang: BackEndStyle,
  React: FrontEndStyle,
  "Tailwind CSS": FrontEndStyle,
  NextJS: FrontEndStyle,
  Firebase: BackEndStyle,
  MongoDB: DatabaseStyle,
  PostgreSQL: DatabaseStyle,
};

export const About = () => {
  const [isShowAbout, SetIsShowAbout] = useState<boolean>(false);

  function handleAbout() {
    SetIsShowAbout(!isShowAbout);
  }
  const scrollToProjects = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      className="w-full"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500">About</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      <div className="leading-7 text-gray-400 text-sm">
        <p>
          With two years of dedicated learning in Full Stack development, I have
          cultivated a strong foundation in creating responsive, user-friendly
          web interfaces. My journey has been fueled by curiosity and a passion
          for technology, which led me to build{" "}
          <a
            onClick={scrollToProjects}
            className="cursor-pointer text-[#FC6736] hover:underline underline-offset-2 font-semibold"
          >
            a variety of personal projects
          </a>{" "}
          that showcase my skills in <Skills skills={skills} />
        </p>
        <AnimatePresence>
          {isShowAbout && (
            <motion.p
              key="extra"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-3"
            >
              While I have not yet gained formal work experience, my hands-on
              approach to learning has allowed me to tackle real-world challenges
              and continuously improve my craft. I am excited to contribute my
              skills to collaborative projects and continue growing as a developer.
            </motion.p>
          )}
        </AnimatePresence>
        <motion.button
          onClick={handleAbout}
          className="mt-4 text-xs font-bold tracking-widest uppercase text-[#FC6736] border border-[#FC6736]/40 px-4 py-1.5 rounded-full hover:bg-[#FC6736] hover:text-white transition-colors duration-200"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          {isShowAbout ? "Show less" : "Read more"}
        </motion.button>
      </div>
    </motion.section>
  );
};

interface ISkills {
  skills: Record<string, string>;
}

const Skills: React.FC<ISkills> = ({ skills }) => {
  return (
    <>
      {Object.entries(skills).map(([skill, style], i) => (
        <span key={i} className="relative">
          <strong className={style}>
            {skill}
            {skill !== "PostgreSQL" ? "," : "."}{" "}
          </strong>
        </span>
      ))}
    </>
  );
};

interface IIcons {
  icon: Record<string, JSX.Element>;
}

export const Icons = ({ icon }: IIcons) => {
  return (
    <div className="flex inset-0 items-center mt-4 gap-5">
      {Object.entries(icon).map(([Name, Icon], i) => (
        <motion.div
          key={Name}
          className="w-8 h-8 cursor-pointer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.6 + i * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          whileHover={{ scale: 1.25, rotate: 6 }}
          whileTap={{ scale: 0.9 }}
        >
          {Icon}
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;
