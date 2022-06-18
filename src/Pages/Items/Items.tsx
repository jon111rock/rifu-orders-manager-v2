import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getItems } from "../../api/itemApi";
import Item from "../../types/Item";

type Props = {};

const Items = (props: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [items, setItems] = useState<Item[]>();

  const handleItemClick = (itemId: string) => {
    navigate(itemId);
  };

  const handleNewItem = () => {
    navigate("new");
  };

  const refreshItemsList = useCallback(() => {
    if (pathname !== "/items") return;

    getItems().then((items) => {
      if (null === items) return;
      setItems(items);
    });
  }, [pathname]);

  useEffect(() => {
    refreshItemsList();
  }, [refreshItemsList]);

  return (
    <div className="dashboard">
      <div className="title">Items</div>
      <div className="dashboard-content overflow-auto">
        <div className="flex justify-end mb-3">
          <button
            className="button-blue"
            onClick={() => {
              handleNewItem();
            }}
          >
            新增商品
          </button>
        </div>
        <ul className="w-full h-full grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 grid-rows-3 gap-5">
          {items ? (
            items.map((item) => (
              <li
                key={item._id}
                className="p-5 relative md:bg-gray bg-white rounded-lg cursor-pointer hover:active"
                onClick={() => {
                  handleItemClick(item._id);
                }}
              >
                <div className="text-2xl">{item.name}</div>
                <div>${item.price}</div>
                <div className="absolute right-10 bottom-10">供應中</div>
              </li>
            ))
          ) : (
            <div>Loading</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Items;
