"use client";
import { ReactNode, useState } from "react";
import { FaceBookIcon, GithubIcon, InstagramIcon } from "./ui/icons";

const Hero = () => {
  const [isShowAbout, SetIsShowAbout] = useState<boolean>(false);

  const socialMediaIcon = {
    facebook: <FaceBookIcon />,
    github: <GithubIcon />,
    instagram: <InstagramIcon className='mt-[2px]' />,
  };

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

  const skills = {
    Typescript: FrontEndStyle,
    NodeJS: BackEndStyle,
    Golang: BackEndStyle,
    "Tailwind CSS": FrontEndStyle,
    React: FrontEndStyle,
    NextJS: FrontEndStyle,
    Firebase: BackEndStyle,
    MongoDB: DatabaseStyle,
    PostgreSQL: DatabaseStyle,
  };
  return (
    <section className='w-full h-full  flex justify-center mb-16'>
      <div className='w-[90%] pt-10'>
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
        <div className='  font-semibold text-2xl max-w-[30rem] min-w-[20rem] mt-6'>
          {text}
        </div>
        <Icons icon={socialMediaIcon} />
        <About>
          <h1 className=' mt-10 mb-5 flex  items-center'>
            <div className=' h-5 bg-[#FC6736] w-1 mr-1' />
            <div className='text-xl font-medium'>ABOUT</div>
          </h1>
          <div className='max-w-[29rem] h-full  min-w-[21rem] leading-7 '>
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
            that showcase my skills in <Skills skills={skills} />
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

interface ISkills {
  skills: Record<string, string>;
}

const Skills: React.FC<ISkills> = ({ skills }) => {
  return (
    <>
      {Object.entries(skills).map(([skill, style]) => (
        <span className='relative'>
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
    <div className='flex h-10 items-center mt-5 gap-4'>
      {Object.entries(icon).map(([Name, Icons]) => (
        <div key={Name} className='w-7 h-7 hover:cursor-pointer'>
          {Icons}
        </div>
      ))}
    </div>
  );
};

export default Hero;
