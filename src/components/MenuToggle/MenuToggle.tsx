import React, { useState, useEffect } from "react";

type Props = {
  isMenuOpen: boolean;
  onChange: (state: boolean) => void;
};

const NavToggle: React.FC<Props> = ({ onChange, isMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      {isOpen ? (
        <i
          className="bx bx-x bx-lg absolute right-3 top-3 cursor-pointer"
          onClick={() => {
            onChange(false);
            setIsOpen(false);
          }}
        ></i>
      ) : (
        <i
          className="bx bx-menu bx-lg absolute right-3 top-3 cursor-pointer"
          onClick={() => {
            onChange(true);
            setIsOpen(true);
          }}
        ></i>
      )}
    </>
  );
};

export default NavToggle;
