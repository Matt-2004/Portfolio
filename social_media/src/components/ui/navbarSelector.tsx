import { useState } from "react";

interface iconsWithRef {
  id: string;
}

interface Iids {
  [key: string]: iconsWithRef;
}

const NavbarSelector = () => {
  const ids: Iids = {
    home: {
      id: "home",
    },
    projects: {
      id: "projects",
    },
    contact: {
      id: "contact",
    },
  };
  const [active, setActive] = useState("home");

  return (
    <ul className='flex flex-col gap-3 mt-20 ml-10'>
      {Object.entries(ids).map(([key, item], i) => (
        <a
          key={i}
          onClick={(e) => {
            setActive(key);
            const targetId = document.getElementById(key);
            if (targetId) {
              targetId.scrollIntoView({ behavior: "smooth", inline: "start" });
            }
            console.log(active);
          }}
          className={`${
            active === item.id ? "opacity-100" : "opacity-60"
          } flex items-center gap-2 w-[15rem]  cursor-pointer group`}
        >
          <div
            className={`${
              active === item.id
                ? "h-[3px] w-28 opacity-100"
                : "h-[2px] w-16 opacity-60"
            } bg-black group-hover:h-[3px] group-hover:w-28  transition-all duration-100 ease-in`}
          />
          <div className='font-bold text-lg '>{item.id.toUpperCase()}</div>
        </a>
      ))}
    </ul>
  );
};

export default NavbarSelector;
