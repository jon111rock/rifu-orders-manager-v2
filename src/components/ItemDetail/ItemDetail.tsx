import React from "react";
import Detail from "../../types/ItemDetail";

type Props = {
  item?: Detail;
  onDelete?: (itemId?: string) => void;
};

const ItemDetail: React.FC<Props> = ({ item, onDelete }) => {
  return (
    <>
      {item ? (
        <>
          <div className="flex justify-between items-center">
            <p>{item.item.name}</p>
            <i
              className="bx bx-x bx-sm text-black-rgba cursor-pointer"
              onClick={() => {
                if (!onDelete) return;
                onDelete(item._id);
              }}
            ></i>
          </div>
          <div className="flex justify-between ">
            <span>{item.count}</span>
            <span>${item.item.price * item.count}</span>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ItemDetail;
