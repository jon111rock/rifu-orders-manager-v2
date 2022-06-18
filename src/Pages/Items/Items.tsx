import React, { useState, useEffect } from "react";
import { getItems } from "../../api/itemApi";
import Item from "../../types/Item";

type Props = {};

const Items = (props: Props) => {
  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    getItems().then((items) => {
      if (null === items) return;
      setItems(items);
    });
  }, []);

  return (
    <div className="dashboard">
      <div className="title">Items</div>
      <div className="dashboard-content overflow-auto">
        <ul className="w-full h-full grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 grid-rows-3 gap-5">
          {items ? (
            items.map((item) => (
              <li className="p-5 relative md:bg-gray bg-white rounded-lg cursor-pointer hover:active">
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
