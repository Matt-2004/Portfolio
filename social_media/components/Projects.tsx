import { createContext, RefObject, useRef } from "react";
import { useProjectRefContext } from "@/lib/dryAvoider";

const Projects = () => {
  const imagePath = require("../public/Screenshot 2024-07-31 100757.png");
  const { projectRef } = useProjectRefContext();

  return (
    <div className='flex h-screen w-screen flex-col ' ref={projectRef}>
      <div className='flex flex-col justify-center mt-[-8rem] items-center'>
        <div className=''>
          <h1 className='text-2xl font-semibold pb-5'>Overview</h1>
          <p className='w-[40rem] font-roboto-mono leading-relaxed text-lg '>
            Welcome to <strong className='text-xl'>MASMAX</strong>, a sleek and
            modern movie discovery website designed to provide users with the
            latest information about their favorite films. This project
            leverages the power of the TMDB (The Movie Database) API, combined
            with the responsive design capabilities of Tailwind CSS, and the
            dynamic front-end functionality of React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
