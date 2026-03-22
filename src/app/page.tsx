import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main className="relative min-h-screen">
        <div
          id="main-scroll-container"
          className="w-screen min-h-full lg:h-screen lg:flex sm:relative overflow-y-auto"
        >
          <Hero />
          <Projects />
        </div>
      </main>
    </>
  );
}
