import { scrollToRef, useProjectRefContext } from "@/lib/dryAvoider";
import { RefObject, useRef, useState } from "react";
import Glitch_button from "./glitch_button";

const NavbarSelector = () => {
  const projectRef = useProjectRefContext();
  const homeRef = useRef<HTMLOListElement>(null);
  const projectsRef = useRef<HTMLOListElement>(null);
  const contactRef = useRef<HTMLOListElement>(null);
  const btnRef = useRef("");
  const [activeBtn, setActiveBtn] = useState("home");
  const onMouseEnterHandleBtn = (ref: RefObject<HTMLOListElement>, e: any) => {
    getIdOfNavbarBtn(e);
    switch (btnRef.current) {
      case "home":
        if (ref.current) {
          ref.current.classList.add("text-[#FC6736]");
          projectsRef.current?.classList.remove("text-[#FC6736]");
          contactRef.current?.classList.remove("text-[#FC6736]");
        }
        break;
      case "projects":
        if (ref.current) {
          ref.current.classList.add("text-[#FC6736]");
          homeRef.current?.classList.remove("text-[#FC6736]");
          contactRef.current?.classList.remove("text-[#FC6736]");
        }
        break;
      case "contact":
        if (ref.current) {
          ref.current.classList.add("text-[#FC6736]");
          projectsRef.current?.classList.remove("text-[#FC6736]");
          homeRef.current?.classList.remove("text-[#FC6736]");
        }
        break;
    }
  };

  const onMouseLeaveHandleBtn = (ref: RefObject<HTMLOListElement>, e: any) => {
    if (ref.current) {
      ref.current.classList.remove("text-[#FC6736]");
      getIdOfNavbarBtn(e);
    }
    switch (activeBtn) {
      case "home":
        if (homeRef.current) {
          homeRef.current.classList.add("text-[#FC6736]");
        }
        break;
      case "projects":
        if (projectsRef.current) {
          projectsRef.current.classList.add("text-[#FC6736]");
        }

        break;
      case "contact":
        if (contactRef.current) {
          contactRef.current.classList.add("text-[#FC6736]");
        }
        break;
    }
  };

  const getIdOfNavbarBtn = (e: any) => {
    btnRef.current = e.target.id;
  };

  const handleClick = (e: any) => {
    setActiveBtn(e.target.id);
  };

  const ScrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  const navbaritemsStyle =
    "cursor-pointer flex items-center uppercase px-2 py-3 text-center hover:bg-[#FFF851] sm:hover:bg-white sm:border-b-0 border-b-2";
  return (
    <ul className='flex sm:gap-4 max-sm:flex-col h-32 sm:h-12  text-lg sm:flex'>
      <ol
        id='home'
        onMouseEnter={(e) => onMouseEnterHandleBtn(homeRef, e)}
        onMouseLeave={(e) => onMouseLeaveHandleBtn(homeRef, e)}
        ref={homeRef}
        onClick={(e) => {
          ScrollToHero(), handleClick(e);
        }}
        className={navbaritemsStyle}
      >
        <svg
          className='h-5 w-5 mr-3 ml-2 sm:hidden'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 576 512'
        >
          <path d='M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' />
        </svg>
        Home
      </ol>
      <ol
        id='projects'
        ref={projectsRef}
        onMouseEnter={(e) => onMouseEnterHandleBtn(projectsRef, e)}
        onMouseLeave={(e) => onMouseLeaveHandleBtn(projectsRef, e)}
        onClick={(e) => {
          scrollToRef(projectRef), handleClick(e);
        }}
        className={navbaritemsStyle}
      >
        <svg
          className='h-5 w-5 mr-3 ml-2 sm:hidden'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 576 512'
        >
          <path d='M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 16 192 0 0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-16-192 0 0 16c0 1.7-.1 3.4-.3 5L272 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-1.7 .1-3.4 .3-5L144 224l-96 0c-26.5 0-48-21.5-48-48L0 80z' />
        </svg>
        Porjects
      </ol>
      <ol
        ref={contactRef}
        onMouseEnter={(e) => onMouseEnterHandleBtn(contactRef, e)}
        onMouseLeave={(e) => onMouseLeaveHandleBtn(contactRef, e)}
        onClick={(e) => handleClick(e)}
        id='contact'
        className={navbaritemsStyle}
      >
        <svg
          className='h-5 w-5 ml-2 mr-3 sm:hidden'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z' />
        </svg>
        Contact
      </ol>
    </ul>
  );
};

export default NavbarSelector;
