import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className='w-screen h-20 items-center flex justify-around'
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className='py-5 px-5 bg-black'>
        <div className='text-4xl  font-bold text-white'>W {">-"}</div>
      </div>
      <div className='flex justify-center gap-28'>
        <ul className='flex gap-20 text-lg items-center font-semibold'>
          <ol className='cursor-pointer'>Task 1</ol>
          <ol className='cursor-pointer'>Task 2</ol>
          <ol className='cursor-pointer'>Task 3</ol>
          <ol className='cursor-pointer'>Task 4</ol>
        </ul>
        <button className='text-lg border py-2 px-5 transition-all duration-150 ease-in hover:bg-black hover:text-white'>
          Resume
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
