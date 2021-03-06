import React, { useState } from "react";
import Detail from "../../types/ItemDetail";

type Props = {
  item?: Detail;
  onDelete?: (itemId?: string) => void;
  ItemDetailList: Detail[];
  setItemDetailList: React.Dispatch<React.SetStateAction<Detail[]>>;
};

const ItemDetail: React.FC<Props> = ({
  item,
  onDelete,
  ItemDetailList,
  setItemDetailList,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleCountChange = (e: any) => {
    let count = e.target.value;
    if (!item) return;
    if (count <= 0) count = 1;
    const tempList = ItemDetailList.map((i) => {
      if (i._id === item._id) {
        i.count = count;
        return i;
      }
      return i;
    });
    setItemDetailList(tempList); //todo 改變list 內屬性
    // item.count = count;
  };

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
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              {isEdit ? (
                <input
                  autoFocus
                  type="number"
                  defaultValue={item.count}
                  className="order-table-input"
                  onBlur={(e) => {
                    handleCountChange(e);
                    setIsEdit(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCountChange(e);
                      setIsEdit(false);
                    }
                  }}
                />
              ) : (
                <>
                  <span>{item.count}</span>
                  <i className="bx bxs-edit text-black-rgba"></i>{" "}
                </>
              )}
            </div>
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
