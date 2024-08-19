import Image from "next/image";

const Projects = () => {
  const ProjectsInfo = {
    MASMAX: {
      image: "/Screenshot 2024-07-31 100757.png",
      url: "https://masmax.vercel.app/",
      overview:
        "MASMAX aims to provide a reliable and user-friendly experience for moviegoers, combining the convenience of online ticket purchasing with the assurance of top-tier security measures.",
      techStack: ["Go", "NextJS", "Tailwind_CSS", "React", "Typescript"],
    },
    PORTFOLIO: {},
  };

  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-[90%] md:mt-4'>
        <div className='flex items-center'>
          <div className=' h-5 bg-[#FC6736] w-1 mr-1' />

          <span className='text-xl font-bold  '>PROJECTS</span>
        </div>
        <PJCards
          image={ProjectsInfo.MASMAX.image}
          title='MASMAX'
          width={370}
          height={400}
          url={ProjectsInfo.MASMAX.url}
          techStack={ProjectsInfo.MASMAX.techStack}
          overview={ProjectsInfo.MASMAX.overview}
        />
      </div>
    </div>
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
    <section id='project'>
      <div className=' max-w-[22rem] min-w-[18rem] pb-4 px-3 py-3 rounded-lg mt-4 flex flex-col items-center bg-[#0A192F]'>
        <div>
          <span className='flex items-center '>
            <a href={url} className='text-xl text-white  font-medium'>
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
          <Image
            width={width}
            height={height}
            src={image}
            alt='masmax'
            className='object-contain mt-3  rounded-sm'
          />
        </div>
        <div className=' mt-4'>
          <div className='w-[20rem] text-gray-300 text-sm leading-normal'>
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
