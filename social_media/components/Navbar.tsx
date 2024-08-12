import { motion } from "framer-motion";
import Glitch_button from "./ui/glitch_button";
import { scrollToRef, useProjectRefContext } from "@/lib/dryAvoider";

const Navbar = () => {
  const projectRef = useProjectRefContext();

  const ScrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='w-screen h-20 fixed bg-white z-30'>
      <motion.div
        className=' bg-white items-center flex justify-around'
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className='py-5 px-5 bg-black'>
          <div className='text-4xl  font-bold text-white'>W {">-"}</div>
        </div>
        <div className='flex justify-center gap-28'>
          <ul className='flex gap-20 font-roboto-mono text-lg items-center font-semibold'>
            <ol
              onClick={() => ScrollToHero()}
              className='cursor-pointer uppercase hover:underline-offset-2 hover:underline'
            >
              Home
            </ol>
            <ol
              onClick={() => scrollToRef(projectRef)}
              className='cursor-pointer uppercase hover:underline-offset-2 hover:underline'
            >
              Porjects
            </ol>
            <ol className='cursor-pointer uppercase hover:underline-offset-2 hover:underline'>
              Contact
            </ol>
          </ul>
          <Glitch_button text='Download Button' />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
