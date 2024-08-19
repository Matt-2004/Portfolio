"use client";

import Hero from "components/Hero";
import Navbar from "components/Navbar";
import Projects from "components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='w-screen h-full lg:h-screen lg:flex sm:relative overflow-x-hidden '>
        <Hero />

        <Projects />
      </div>
    </main>
  );
}
