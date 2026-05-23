"use client";

import { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/sections/About";
import CommandPalette from "../components/ui/CommandPalette";
import Navbar from "../components/ui/Navbar";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  // Parallax scroll tracking for background orbs
  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        document.documentElement.style.setProperty(
          "--scroll-offset",
          `${scrollY}px`,
        );
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <Navbar />
      <CommandPalette />
      <main ref={mainRef} className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
