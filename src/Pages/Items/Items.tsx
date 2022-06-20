import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../../types/Item";
import ListPage from "../../components/ListPage";
import { MAX_ITEM_PER_PAGE } from "../../constants";

type Props = {
  itemList?: Item[];
};

const Items: React.FC<Props> = ({ itemList }) => {
  const navigate = useNavigate();
  const [displayList, setDisplayList] = useState<Item[]>([]);
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);

  const handleItemClick = (itemId: string) => {
    navigate(itemId);
  };

  const handleNewItem = () => {
    navigate("new");
  };

  const filterByPageNum = useCallback(
    (list: Item[]) => {
      return list.slice(
        (currentPageNum - 1) * MAX_ITEM_PER_PAGE,
        currentPageNum * MAX_ITEM_PER_PAGE
      );
    },
    [currentPageNum]
  );

  useEffect(() => {
    if (!itemList) return;
    const filteredList = filterByPageNum(itemList);

    setDisplayList(filteredList);
  }, [filterByPageNum, itemList]);

  return (
    <div className="dashboard">
      <div className="title">產品</div>
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
          {displayList ? (
            displayList.map((item) => (
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
        <ListPage
          maxPage={itemList ? itemList.length / MAX_ITEM_PER_PAGE : 1}
          onChangePage={(pageNumber) => {
            setCurrentPageNum(pageNumber);
          }}
        />
      </div>
    </div>
  );
};

export default Items;
