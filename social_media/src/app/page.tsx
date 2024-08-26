"use client";

import Hero from "components/Hero";
import Navbar from "components/Navbar";
import Projects from "components/Projects";

export default function Home() {
  return (
    <main className='bg-teal-300'>
      <div className='w-screen min-h-full lg:h-screen lg:flex sm:relative overflow-x-hidden '>
        <Hero />

        <Projects />
      </div>
    </main>
  );
}
