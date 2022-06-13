import React, { useState, useEffect } from "react";

type Props = {
  onChange: (state: boolean) => void;
};

const NavToggle: React.FC<Props> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  useEffect(() => {
    onChange(isOpen);
  }, [isOpen, onChange]);

  return (
    <>
      {isOpen ? (
        <i
          className="bx bx-x bx-lg fixed right-3 top-3 cursor-pointer"
          onClick={handleClick}
        ></i>
      ) : (
        <i
          className="bx bx-menu bx-lg fixed right-3 top-3 cursor-pointer"
          onClick={handleClick}
        ></i>
      )}
    </>
  );
};

export default NavToggle;
