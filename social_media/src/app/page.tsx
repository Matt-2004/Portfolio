"use client";

import Hero from "components/Hero";
import Projects from "components/Projects";

export default function Home() {
  return (
    <main className=''>
      <div className='w-screen min-h-full lg:h-screen lg:flex sm:relative overflow-y-auto '>
        <Hero />

        <Projects />
      </div>
    </main>
  );
}
