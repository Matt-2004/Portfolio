import Image from "next/image";
import { About } from "./Hero";

const Projects = () => {
  const ProjectsInfo = {
    MASMAX: {
      image: "/Screenshot 2024-07-31 100757.png",
      url: "https://masmax.vercel.app/",
      overview:
        "MASMAX aims to provide a reliable and user-friendly experience for moviegoers, combining the convenience of online ticket purchasing with the assurance of top-tier security measures.",
      techStack: ["Golang", "NextJS", "Tailwind_CSS", "React", "Typescript"],
    },
    PORTFOLIO: {},
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[85%] md:mt-4'>
        <About />
        <Skills />
        <Title text='PROJECTS' />
        <PJCards
          image={ProjectsInfo.MASMAX.image}
          title='MASMAX'
          width={500}
          height={400}
          url={ProjectsInfo.MASMAX.url}
          techStack={ProjectsInfo.MASMAX.techStack}
          overview={ProjectsInfo.MASMAX.overview}
        />
      </div>
    </div>
  );
};

const Title = ({ text }: { text: string }) => {
  return (
    <section id='projects' className='flex items-center'>
      <div className=' h-5 bg-[#FC6736] w-1 mr-1' />
      <span className='text-xl font-bold  '>{text}</span>
    </section>
  );
};

const Skills = () => {
  return (
    <section className='max-w-[30rem]  relative'>
      <Title text='SKILLS' />
      <div className='w-full flex justify-center flex-col items-center mt-10'>
        <div className='h-2 w-2 opacity-60 rounded-full bg-[#001f3f] ' />
        <div className='w-[3px] h-10 opacity-60 bg-[#001f3f]' />
        <div className='w-64 h-[3px] opacity-60 bg-[#001f3f]' />
        <div className='w-64 flex justify-between'>
          <div className='w-[3px] h-32 relative bg-[#FC6736]'>
            <h3 className='transform font-semibold rotate-90 absolute left-[-1.5rem] top-10'>
              Frontend
            </h3>
          </div>
          <div className='w-[3px] h-32 relative bg-blue-500'>
            <h3 className='transform rotate-90 font-semibold  absolute left-[-1.2rem] top-10'>
              Backend
            </h3>
          </div>
          <div className='w-[3px] h-32 relative bg-green-500'>
            <h3 className='transform font-semibold rotate-90 absolute top-10 left-[-1.3rem]'>
              Database
            </h3>
          </div>
        </div>
        <div className='w-[16.52rem] flex justify-between'>
          <div className='w-3 h-3 rounded-full bg-[#FC6736]' />
          <div className='w-3 h-3 rounded-full bg-blue-500' />
          <div className='w-3 h-3 rounded-full bg-green-500' />
        </div>
      </div>
      <div className='w-full pl-4 flex justify-center ml-2 mb-10'>
        <div className='w-[21rem] flex justify-between'>
          <div className='pr-3 flex font-semibold flex-col gap-1 pt-2'>
            <div>React</div>
            <div>NextJS</div>
            <div>Typescript</div>
          </div>
          <div className='pr-3 flex font-semibold  flex-col gap-1 pt-2'>
            <div>NodeJS</div>
            <div>ExpressJS</div>
            <div>Golang</div>
            <div>Firebase</div>
          </div>
          <div className='flex font-semibold  flex-col gap-1 pt-2'>
            <div>MongoDB</div>
            <div>PostgreSQl</div>
            <div>MySQL</div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

interface IPJCards {
  image: any;
  title: string;
  overview?: string;
  techStack: string[];
  url: string;
  width: number;
  height: number;
}

const PJCards = ({
  image,
  title,
  overview,
  techStack,
  url,
  width,
  height,
}: IPJCards) => {
  return (
    <section className='w-full flex justify-center mt-5'>
      <div className=' max-w-[22rem] z-30 relative overflow-hidden min-w-[18rem] md:max-w-[30rem] px-3 py-5 rounded-xl mt-4 flex flex-col  bg-[#001f3f] shadow-md'>
        <div>
          <Image
            width={width}
            height={height}
            src={image}
            alt='masmax'
            className='w-[30rem] p-1 border shadow-lg z-10  rounded-md'
          />
          <span className='flex items-center mt-3'>
            <a href={url} className='text-xl underline text-white  font-medium'>
              {title}
            </a>{" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='#0070f0'
              className='inline-block h-6 w-6 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                clipRule='evenodd'
              ></path>
            </svg>
          </span>
        </div>
        <div className=' mt-4'>
          <div className='md:max-w-[35rem] min-w-[20rem] text-gray-300 text-sm leading-normal'>
            {overview}
          </div>

          <div className='flex flex-wrap gap-2 mt-4'>
            {techStack?.map((data, i) => {
              return (
                <div
                  key={i}
                  className='py-1 px-2 text-xs font-medium text-teal-300 rounded-full bg-teal-400/10 '
                >
                  {data}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
