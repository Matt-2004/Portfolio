"use client";

import Hero from "components/Hero";
import Navbar from "components/Navbar";
import Projects from "components/Projects";

export default function Home() {
  return (
    <div className='w-screen h-screen '>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
