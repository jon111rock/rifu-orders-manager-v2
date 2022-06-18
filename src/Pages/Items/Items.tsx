import React from "react";
import { useNavigate } from "react-router-dom";
// import { getItems } from "../../api/itemApi";
import Item from "../../types/Item";

type Props = {
  itemList?: Item[];
};

const Items: React.FC<Props> = ({ itemList }) => {
  const navigate = useNavigate();

  const handleItemClick = (itemId: string) => {
    navigate(itemId);
  };

  const handleNewItem = () => {
    navigate("new");
  };

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
          {itemList ? (
            itemList.map((item) => (
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
