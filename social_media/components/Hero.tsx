"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Glitch_button from "./ui/glitch_button";
import { scrollToRef, useProjectRefContext } from "@/lib/dryAvoider";

const Hero = () => {
  const projectRef = useProjectRefContext();
  const text =
    "I build exceptional and accessible digital experiences for the web.";
  const name = "Wai Yan Aung";
  return (
    <div
      id='hero'
      className='h-screen   relative w-screen flex flex-col justify-center items-center  '
    >
      <BackgroundBeams />
      <div className=' relative   z-10 flex  text-center justify-around items-center w-full'>
        <div className='flex flex-col  border-4 pl-8 py-8 border-dashed rounded-lg'>
          <div className='w-[40rem]  text-7xl'>
            <motion.p
              className='text-xl text-start font-roboto-mono'
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
          <div className='w-[33rem]  mt-4'>
            <TextGenerateEffect
              filter={false}
              className=' text-start font-roboto-mono text-xl'
              words={text}
            />
          </div>
          <motion.div
            onClick={() => scrollToRef(projectRef)}
            className='mt-6 flex mr-9'
            initial={{ x: "100vw" }}
            animate={{ x: 370 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
          >
            <Glitch_button
              text="Let's Explore"
              icon={<FontAwesomeIcon icon={faArrowRight} />}
            />
          </motion.div>
        </div>
        <h1>Image</h1>
      </div>
    </div>
  );
};

export default Hero;
