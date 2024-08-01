"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const text =
    "I build exceptional and accessible digital experiences for the web.";
  const name = "Wai Yan Aung";
  return (
    <div className='h-screen relative w-screen flex flex-col justify-center items-center  '>
      <BackgroundBeams />
      <div className=' relative  z-10 flex  text-center justify-around items-center w-full'>
        <div className='flex flex-col '>
          <div className='w-[40rem] text-7xl'>
            <motion.p
              className='text-xl text-start'
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5,
                type: "tween",

                delay: 0.1,
              }}
            >
              Hi, my name is
            </motion.p>
            <TextGenerateEffect
              className='text-start'
              words={name}
              filter={false}
            />
          </div>
          <div className='w-[33rem] mt-4'>
            <TextGenerateEffect
              filter={false}
              className=' font-normal text-start text-xl'
              words={text}
            />
          </div>
          <motion.div
            onClick={() => scrollToSection("project")}
            className='mt-6 flex mr-9'
            initial={{ x: "100vw" }}
            animate={{ x: 370 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
          >
            <Button
              borderRadius='0.1rem'
              className={`bg-white transition-all duration-150 ease-in dark:bg-slate-900 text-black dark:text-white border-neutral-200 hover:text-white hover:bg-slate-900 dark:border-slate-800 text-lg`}
            >
              Let's Explore{" "}
              <span className='pl-2'>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Button>
          </motion.div>
        </div>
        <h1>Image</h1>
      </div>
    </div>
  );
};

export default Hero;
