import { useState } from "react";
import NavbarSelector from "./ui/navbarSelector";
import Glitch_button from "./ui/glitch_button";
import { Grey_Qo } from "next/font/google";
import { DownloadIcon, MenuIcon } from "./ui/icons";

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

  return (
    <>
      <section className='w-full h-15'>
        <div className='flex border-b-2 shadow-sm overflow-hidden justify-between px-5 py-3 sm:px-10'>
          <div className={grey_qo.className}>
            <span className='text-4xl sm:text-5xl cursor-default'>WYA</span>
          </div>
          <div className='max-sm:hidden flex gap-10  items-center'>
            <NavbarSelector />
            <Glitch_button text='RESUME' icon={<DownloadIcon />} />
          </div>

          <div
            className='flex sm:hidden text-xl cursor-pointer'
            onClick={handleMenu}
          >
            <MenuIcon />
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
          <MenuIcon />
        </span>
      </div>
      <NavbarSelector />
    </div>
  );
};

export default Navbar;
