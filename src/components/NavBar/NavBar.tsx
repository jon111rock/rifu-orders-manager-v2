import React from "react";

type Props = {
  isMenuOpen: boolean;
};

const NavBar = ({ isMenuOpen }: Props) => {
  return (
    <>
      <div
        className={`fixed left-0 top-0 w-64 h-screen p-8 bg-[#151718] text-white
      transition-all duration-300 ease-in z-5 ${
        isMenuOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      } `}
      >
        <div className="w-fit m-auto mb-24">Header</div>
        <ul className="w-fit m-auto">
          <li className="mb-7">Item 1</li>
          <li className="mb-7">Item 2</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
