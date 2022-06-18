import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const ItemTable = (props: Props) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black-rgba flex justify-center items-center">
      <div className="p-10 bg-white flex flex-col gap-5 rounded-xl">
        <div>
          <span>Name</span>
          <input className="order-table-input" type="text" />
        </div>
        <div>
          <span>Price</span>
          <input className="order-table-input" type="text" />
        </div>
        <div className="flex justify-end">
          <button className="button-blue">儲存</button>
          <button
            className="button-border-blue"
            onClick={() => {
              handleCancel();
            }}
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemTable;
