import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createItem, deleteItem } from "../../api/itemApi";

import PopupModal from "../../components/PopupModal";

type Props = {};

const ItemTable = (props: Props) => {
  const navigate = useNavigate();
  const { itemId } = useParams();

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleSave = async () => {
    if (!name || !price) return;
    const tempItem = { name: name, price: price };
    await createItem(tempItem);
    navigate(-1);
  };

  const handleDelete = async () => {
    if (!itemId) return;
    await deleteItem(itemId);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black-rgba flex justify-center items-center">
      <div className="p-10 bg-white flex flex-col gap-5 rounded-xl">
        <div>
          <span>Name</span>
          <input
            className="order-table-input"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Price</span>
          <input
            className="order-table-input"
            type="text"
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex justify-end">
          {itemId !== "new" ? (
            <button
              className="button-blue bg-red"
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              刪除
            </button>
          ) : (
            ""
          )}
          <button
            className="button-blue"
            onClick={() => {
              handleSave();
            }}
          >
            儲存
          </button>
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
      {isOpenModal ? (
        <PopupModal
          confirm={() => {
            handleDelete();
          }}
          cancel={() => {
            setIsOpenModal(false);
          }}
        >
          確定要刪除嗎?
        </PopupModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default ItemTable;
