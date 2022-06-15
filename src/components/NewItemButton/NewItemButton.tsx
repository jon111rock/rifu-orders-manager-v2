import React from "react";

type Props = {
  onClick?: () => void;
};

const NewItemButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div
      className="w-full p-4 border-2 border-dashed border-lightGray flex justify-center 
    items-center rounded-lg cursor-pointer"
      onClick={(e) => {
        if (!onClick) return;
        onClick();
      }}
    >
      <span>新增商品</span>
    </div>
  );
};

export default NewItemButton;
