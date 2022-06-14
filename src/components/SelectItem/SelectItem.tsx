import React, { useRef } from "react";

import Item from "../../types/Item";

type Props = {
  onClick?: (item?: Item) => void;
};

const SelectItem: React.FC<Props> = ({ onClick }) => {
  const main = useRef<HTMLUListElement>(null);

  const handleClick = (item?: Item) => {
    if (!onClick) return;
    onClick(item);
  };

  return (
    <div
      className="fixed w-screen h-screen top-0 left-0 bg-black-rgba flex justify-center items-center"
      onClick={(e) => {
        if (e.target && main.current?.contains(e.target as HTMLUListElement))
          return;

        handleClick();
      }}
    >
      <ul
        ref={main}
        className="bg-white p-5 rounded-lg md:w-1/2 md:h-1/2 w-3/4 h-3/4"
      >
        <li className="mb-2 border-b border-lightGray hover:bg-gray cursor-pointer last:border-none">
          草莓吐司 $10
        </li>
        <li className="mb-2 border-b border-lightGray hover:bg-gray cursor-pointer last:border-none">
          濃厚巧克力 $20
        </li>
        <li className="mb-2 border-b border-lightGray hover:bg-gray cursor-pointer last:border-none">
          抹茶後片 $30
        </li>
      </ul>
    </div>
  );
};

export default SelectItem;
