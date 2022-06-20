import React from "react";
import { Link, useLocation } from "react-router-dom";
import menuItems from "./menuItems";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`fixed left-0 top-0 w-64 h-screen p-8 bg-white text-lightGray shadow-md
      transition-all duration-300 ease-in z-5 ${
        isMenuOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      } `}
      >
        <div className="w-fit m-auto mb-24 text-2xl text-black font-bold">
          日夫先生
        </div>
        <ul className="w-fit m-auto text-sm">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.link}>
              <li
                className={`mb-7 flex gap-2 cursor-pointer items-center p-1 ${
                  pathname === item.link ? "active" : ""
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {item.logo}
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
