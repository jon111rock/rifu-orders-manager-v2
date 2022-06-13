import React from "react";
import menuItems from "./menuItems";

type Props = {
  isMenuOpen: boolean;
};

const NavBar: React.FC<Props> = ({ isMenuOpen }) => {
  return (
    <>
      <div
        className={`fixed left-0 top-0 w-64 h-screen p-8 bg-[#151718] text-white
      transition-all duration-300 ease-in z-5 ${
        isMenuOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      } `}
      >
        <div className="w-fit m-auto mb-24 text-2xl">日夫先生</div>
        <ul className="w-fit m-auto text-sm">
          {menuItems.map((item) => (
            <li className="mb-7 flex gap-2 cursor-pointer" key={item.name}>
              {item.logo}
              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
