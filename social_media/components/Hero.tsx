"use client";
import { ReactNode, useState } from "react";

const Hero = () => {
  const [isShowAbout, SetIsShowAbout] = useState<boolean>(false);

  function handleAbout() {
    SetIsShowAbout(!isShowAbout);
  }
  const scrollToProjects = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
  };
  const text =
    "I build exceptional and accessible digital experiences for the web.";
  const name = "MAS";

  const FrontEndStyle =
    'cursor-pointer hover:after:content-["Frontend"] hover:after:bg-[#FC6736] hover:after:text-white hover:after:absolute hover:after:top-[-113%] hover:after:left-0 hover:after:px-[3px]';
  const BackEndStyle =
    'cursor-pointer hover:after:content-["Backend"] hover:after:bg-blue-500 hover:after:text-white hover:after:absolute hover:after:top-[-113%] hover:after:left-0 hover:after:px-[3px]';
  const DatabaseStyle =
    'cursor-pointer hover:after:content-["Database"] hover:after:bg-green-500 hover:after:text-white hover:after:absolute hover:after:top-[-113%] hover:after:left-0 hover:after:px-[3px]';

  return (
    <section className='w-full h-full flex justify-center mb-16'>
      <div className='w-[80%] pt-10'>
        <div className='  relative'>
          <div className='absolute font-bold  inset-0  z-[-10]  top-2'>
            <svg height='100' width='200'>
              <text x='6' y='60' fontSize='72' fill='none' stroke='#FC6736'>
                {name}
              </text>
            </svg>
          </div>
          <span className='text-7xl  text-black z-10 font-bold '>{name}</span>
        </div>
        <div className='  font-semibold text-2xl mt-6'>{text}</div>
        <About>
          <h1 className=' mt-10 mb-5 flex  items-center'>
            <div className=' h-5 bg-[#FC6736] w-1 mr-1' />
            <div className='text-xl font-medium'>ABOUT</div>
          </h1>
          <div className='max-w-[40rem] h-full  min-w-[21rem] leading-7 '>
            With <strong>two years</strong> of dedicated learning in Full Stack
            development, I’ve cultivated a strong foundation in creating{" "}
            <strong>responsive</strong>, user-friendly web interfaces. My
            journey has been fueled by curiosity and a passion for technology,
            which led me to build{" "}
            <a
              onClick={scrollToProjects}
              className='text-blue-600 font-bold cursor-pointer hover:underline-offset-2 hover:underline'
            >
              a variety of personal projects
            </a>{" "}
            that showcase my skills in{" "}
            <span className='relative'>
              <strong className={FrontEndStyle}>Typescript, </strong>
            </span>
            <span className='relative'>
              <strong className={BackEndStyle}>NodeJS, </strong>
            </span>
            <span className='relative'>
              <strong className={BackEndStyle}>Golang, </strong>
            </span>
            <span className='relative'>
              <strong className={FrontEndStyle}>Tailwind CSS, </strong>
            </span>
            <span className='relative'>
              <strong className={FrontEndStyle}>React, </strong>
            </span>
            <span className='relative'>
              <strong className={FrontEndStyle}>NextJS, </strong>
            </span>
            <span className='relative'>
              <strong className={BackEndStyle}>Firebase, </strong>
            </span>
            <span className='relative'>
              <strong className={DatabaseStyle}>MongoDB, </strong>
            </span>
            <span className='relative'>
              <strong className={DatabaseStyle}>PostgreSQL. </strong>
            </span>
            <span style={{ display: isShowAbout ? "inline" : "none" }}>
              While I haven’t yet gained formal work experience, my hands-on
              approach to learning has allowed me to tackle real-world
              challenges and continuously improve my craft. I’m excited to
              contribute my skills to collaborative projects and continue
              growing as a developer.
            </span>
            <span
              className='text-blue-500 cursor-context-menu underline'
              onClick={handleAbout}
            >
              {isShowAbout ? "hide text" : "load more text"}
            </span>
          </div>
        </About>
      </div>
    </section>
  );
};

const About = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default Hero;
