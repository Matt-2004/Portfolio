import { RefObject, useEffect, useRef, useState } from "react";
import Glitch_button from "./glitch_button";
import { ContactIcon, HomeIcon, ProjectIcon } from "./icons";

const NavbarSelector = () => {
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

  useEffect(() => {
    activateBtn();
  }, []);

  const activateBtn = () => {
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

  const onMouseLeaveHandleBtn = (ref: RefObject<HTMLOListElement>, e: any) => {
    if (ref.current) {
      ref.current.classList.remove("text-[#FC6736]");
      getIdOfNavbarBtn(e);
    }
    activateBtn();
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
    "cursor-pointer flex items-center uppercase px-2 py-3 text-center sm:hover:bg-white sm:border-b-0 border-b-2";
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
        <HomeIcon />
        Home
      </ol>
      <ol
        id='projects'
        ref={projectsRef}
        onMouseEnter={(e) => onMouseEnterHandleBtn(projectsRef, e)}
        onMouseLeave={(e) => onMouseLeaveHandleBtn(projectsRef, e)}
        onClick={(e) => handleClick(e)}
        className={navbaritemsStyle}
      >
        <ProjectIcon />
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
        <ContactIcon />
        Contact
      </ol>
    </ul>
  );
};

export default NavbarSelector;
