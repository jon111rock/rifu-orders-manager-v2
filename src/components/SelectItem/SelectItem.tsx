import React, { useRef } from "react";

import Item from "../../types/Item";

type Props = {
  onClick?: (item?: Item) => void;
  itemList?: Item[];
};

const SelectItem: React.FC<Props> = ({ onClick, itemList }) => {
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
        {itemList ? (
          itemList.map((item) => (
            <li
              className="mb-2 p-2 border-b border-lightGray hover:bg-gray cursor-pointer last:border-none"
              key={item._id}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item.name} ${item.price}
            </li>
          ))
        ) : (
          <div>loading...</div>
        )}
      </ul>
    </div>
  );
};

export default SelectItem;
