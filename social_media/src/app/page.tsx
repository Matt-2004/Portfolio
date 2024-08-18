"use client";

import Hero from "components/Hero";
import Navbar from "components/Navbar";
import Projects from "components/Projects";

export default function Home() {
  return (
    <main>
      <div className='w-full h-full max-sm:overflow-hidden'>
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
