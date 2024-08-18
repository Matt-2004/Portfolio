import { useState } from "react";
import NavbarSelector from "./ui/navbarSelector";
import Glitch_button from "./ui/glitch_button";
import { Grey_Qo } from "next/font/google";

const grey_qo = Grey_Qo({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  preload: true,
  style: ["normal", "normal"],
});

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  const handleMenu = () => {
    setMenuBar(!menuBar);
  };

  const DownloadICon = () => {
    return (
      <svg
        className='w-4 h-4 mr-2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z' />
      </svg>
    );
  };

  return (
    <>
      <section className='w-full h-15'>
        <div className='flex border-b-2 shadow-sm overflow-hidden justify-between px-5 py-3 sm:px-10'>
          <div className={grey_qo.className}>
            <span className='text-4xl sm:text-5xl cursor-default'>WYA</span>
          </div>
          <div className='max-sm:hidden flex gap-10  items-center'>
            <NavbarSelector />
            <Glitch_button text='RESUME' icon={<DownloadICon />} />
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
      className='sm:flex flex-col absolute z-30 bg-white top-0   h-full w-40  border-l-2 border-gray-200'
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
