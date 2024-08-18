import Image from "next/image";

const Projects = () => {
  const ProjectsInfo = {
    MASMAX: {
      image: "/Screenshot 2024-07-31 100757.png",
      url: "https://masmax.vercel.app/",
      overview:
        "MASMAX aims to provide a reliable and user-friendly experience for moviegoers, combining the convenience of online ticket purchasing with the assurance of top-tier security measures.",
      techStack: [
        "/go-gopher-svgrepo-com.svg",
        "/next.svg",
        "/tailwind-css.svg",
        "/react-svgrepo-com.svg",
        "/typescript-icon-svgrepo-com.svg",
      ],
    },
    PORTFOLIO: {},
  };

  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-[80%]'>
        <div className='flex items-center mb-10'>
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
      <div className=''>
        <div>
          <span className='flex items-center my-3'>
            <a href={url} className='text-2xl  font-bold'>
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
            className='object-contain rounded-md'
          />
        </div>
        <div className='max-w-[30rem] min-w-[21rem]'>
          <div className=' font-medium text-lg my-2'>Overview</div>
          <div className='w-[21rem] text-gray-500  font-medium text-[1rem] leading-6'>
            {overview}
          </div>
          <div className='flex justify-between mt-4'>
            <div className='flex '>
              {techStack?.map((data, i) => {
                return (
                  <Image
                    key={i}
                    className='w-10 h-10  py-1 px-1'
                    width={50}
                    height={50}
                    src={data}
                    alt=''
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
