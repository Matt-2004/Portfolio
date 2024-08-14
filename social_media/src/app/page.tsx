"use client";

import Hero from "components/Hero";
import Navbar from "components/Navbar";
import Projects from "components/Projects";
import { createContext, RefObject, useRef } from "react";

export interface RefContextType {
  projectRef: RefObject<HTMLDivElement>;
}

export const ProjectContext = createContext<RefContextType | undefined>(
  undefined
);

export default function Home() {
  const projectRef = useRef<HTMLDivElement>(null);
  return (
    <ProjectContext.Provider value={{ projectRef }}>
      <div className='w-full h-full max-sm:overflow-hidden'>
        <Navbar />
        <Hero />
        {/* <Projects /> */}
      </div>
    </ProjectContext.Provider>
  );
}
