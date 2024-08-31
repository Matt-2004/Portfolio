"use client";
import { useState } from "react";
import {
  DownloadIcon,
  FaceBookIcon,
  GithubIcon,
  InstagramIcon,
} from "./ui/icons";
import { Title } from "./Projects";
import NavbarSelector from "./ui/navbarSelector";

const Hero = () => {
  const socialMediaIcon = {
    facebook: <FaceBookIcon />,
    github: <GithubIcon />,
    instagram: <InstagramIcon className='mt-[2px]' />,
  };

  const role = "Full Stack Developer";
  const text =
    "I build exceptional and accessible digital experiences for the web.";
  const name = "MAS";

  return (
    <section className='w-full lg:w-[60%] sticky top-0 flex justify-center mb-16 '>
      <div className='max-w-full text-center pt-10 px-2 py-2'>
        <div className='  relative cursor-default'>
          <span className='text-8xl font-bold bg-clip-text text-transparent  bg-gradient-to-tl from-orange-300 to-[#f85823]'>
            {name}
          </span>
        </div>
        <div className='text-gray-600 font-bold text-3xl max-w-[30rem] min-w-[20rem] mt-1'>
          {role}
        </div>
        <div className='  font-semibold text-xl max-w-[30rem] min-w-[20rem] mt-6 leading-6'>
          {text}
        </div>
        <div className='w-full h-[5rem] space-y-3 mt-10  flex flex-col justify-center items-center'>
          <Icons icon={socialMediaIcon} />
          <a
            className='flex gap-1 hover:bg-[#fc561e] focus:border-2 focus:border-[#FC6736] text-white bg-[#FC6736] justify-between font-semibold px-4 py-2 rounded-full items-center '
            href='/Resume.docx'
            download
          >
            Downalod CV {"  "}
            <DownloadIcon />
          </a>
        </div>
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
    <section id='home' className='w-full flex justify-center'>
      <div className=' w-[98%] sm:w-[80%] md:px-10 md:py-10 py-4 px-5 sm:px-8 rounded-xl gap-5 flex flex-col justify-center items-center bg-gradient-to-t from-[#2163a4] to-[#0a2e4f]'>
        <Title text='ABOUT' />
        <div className='w-[65%] text-center  leading-7 text-gray-100 '>
          With two years of dedicated learning in Full Stack development, I’ve
          cultivated a strong foundation in creating responsive, user-friendly
          web interfaces. My journey has been fueled by curiosity and a passion
          for technology, which led me to build{" "}
          <a
            onClick={scrollToProjects}
            className=' cursor-pointer hover:underline-offset-2 hover:underline'
          >
            a variety of personal projects
          </a>{" "}
          that showcase my skills in <Skills skills={skills} />
          <span style={{ display: isShowAbout ? "inline" : "none" }}>
            While I haven’t yet gained formal work experience, my hands-on
            approach to learning has allowed me to tackle real-world challenges
            and continuously improve my craft. I’m excited to contribute my
            skills to collaborative projects and continue growing as a
            developer.
          </span>
          <span
            className='text-[#FC6736] font-semibold cursor-context-menu underline'
            onClick={handleAbout}
          >
            {isShowAbout ? "Hide text" : "Load more text"}
          </span>
        </div>
      </div>
    </section>
  );
};

interface ISkills {
  skills: Record<string, string>;
}

const Skills: React.FC<ISkills> = ({ skills }) => {
  return (
    <>
      {Object.entries(skills).map(([skill, style], i) => (
        <span key={i} className='relative'>
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

const Icons: React.FC<IIcons> = ({ icon }) => {
  return (
    <div className='flex h-10 inset-0 items-center mt-5 gap-4'>
      {Object.entries(icon).map(([Name, Icons]) => (
        <div
          key={Name}
          className='w-7 h-7 hover:cursor-pointer opacity-80  hover:opacity-100'
        >
          {Icons}
        </div>
      ))}
    </div>
  );
};

export default Hero;
