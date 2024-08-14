import { useState } from "react";
import NavbarSelector from "./ui/navbarSelector";
import Glitch_button from "./ui/glitch_button";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  const handleMenu = () => {
    setMenuBar(!menuBar);
  };

  return (
    <>
      <section className='w-full h-15'>
        <div className='flex border-b-2 shadow-sm overflow-hidden justify-between px-5 py-3 sm:px-10'>
          <div className='font-grey-qo text-4xl sm:text-5xl cursor-default'>
            WYA
          </div>
          <div className='max-sm:hidden flex gap-10 font-roboto-mono items-center'>
            <NavbarSelector />
            <Glitch_button text='RESUME' />
          </div>

          <div
            className='flex sm:hidden text-xl cursor-pointer'
            onClick={handleMenu}
          >
            <svg
              className='w-6 h-6 mt-1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path d='M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z' />
            </svg>
          </div>
        </div>
      </section>
      <NavBarDisplayer menuBar={menuBar} handleMenu={handleMenu} />
    </>
  );
};

interface INavBarDisplayer {
  menuBar: boolean;
  handleMenu: () => void;
}

export const NavBarDisplayer = ({ menuBar, handleMenu }: INavBarDisplayer) => {
  return (
    <div
      style={{
        right: 0,
        opacity: menuBar ? "100" : "0",
        visibility: menuBar ? "visible" : "hidden",
        transition: "opacity 0.1s ease, visibility 0.3s ease",
      }}
      className='sm:flex flex-col absolute bg-white top-0 font-roboto-mono  h-full w-48  border-l-2 border-gray-200'
    >
      <div className=' flex justify-center gap-3 py-[0.61rem] text-xl   border-b-2  border-gray-200'>
        <p className='py-2'>MENU</p>
        <span
          onClick={handleMenu}
          className='cursor-pointer hover:bg-[#FFF851] py-2 px-3 rounded-[50%]'
        >
          <svg
            className='w-5 h-5 mt-1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path d='M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z' />
          </svg>
        </span>
      </div>
      <NavbarSelector />
    </div>
  );
};

export default Navbar;
