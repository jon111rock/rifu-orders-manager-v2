import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getItems } from "../../api/itemApi";

import NewItemButton from "../../components/NewItemButton";
import SelectItem from "../../components/SelectItem";

import Order from "../../types/Order";
import Detail from "../../types/ItemDetail";
import Item from "../../types/Item";

type Props = {
  ordersList?: Order[];
};

const OrderTable: React.FC<Props> = ({ ordersList }) => {
  const { orderId } = useParams<string>();

  const [selectItemOpen, setSelectItemOpen] = useState<boolean>(false);

  const [defaultOrder, setDefaultOrder] = useState<Order>();
  const [itemDetailList, setItemDetailList] = useState<Detail[]>();
  const [itemList, setItemList] = useState<Item[]>();

  const handleAddItemBtnClick = () => {
    setSelectItemOpen((current) => !current);
  };

  const handleSelectItemClick = (item?: Item) => {
    if (!item) {
      setSelectItemOpen(false);
      return;
    }
    const newItemDetail: Detail = {
      _id: item._id,
      item: item,
      count: 1,
    };

    setItemDetailList((currentList) => {
      if (!currentList) return;
      return [...currentList, newItemDetail];
    });
    setSelectItemOpen(false);
  };

  // set default order
  useEffect(() => {
    if (!ordersList) return;
    const foundOrder = ordersList.find((order) => order._id === orderId);
    if (!foundOrder) return;
    setDefaultOrder(foundOrder);
    setItemDetailList(foundOrder.details);
  }, [orderId, ordersList]);

  // get items api
  useEffect(() => {
    getItems().then((res) => {
      if (res === null) return;
      setItemList(res);
    });
  }, []);

  return (
    <>
      <div className="fixed  left-0 top-0  w-screen h-screen bg-black-rgba flex justify-center items-center">
        <div className="md:w-[80%] md:h-auto w-full h-[90%] m-4 p-5 bg-white rounded-lg overflow-auto">
          {/* 表單 */}
          <div className="md:grid md:grid-cols-2 md:gap-5 mb-4">
            {/* 使用者資訊 */}
            <ul className="w-full">
              <li className="mb-4">
                <p className="mb-2">姓名</p>
                <input
                  type="text"
                  className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
                  defaultValue={defaultOrder?.user.name}
                />
              </li>
              <li className="mb-2">
                <p className="mb-2">地址</p>
                <input
                  type="text"
                  className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
                  defaultValue={defaultOrder?.user.address}
                />
              </li>
              <li className="mb-2">
                <p className="mb-2">聯絡電話</p>
                <input
                  type="text"
                  className="p-1 focus:outline-none  w-full border border-solid border-lightGray rounded-md"
                  defaultValue={defaultOrder?.user.phone_number}
                />
              </li>
              <li className="mb-2 flex gap-4">
                <div className="w-1/2">
                  <p className="mb-2">預計出貨時間</p>
                  <input
                    type="date"
                    className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
                    defaultValue={defaultOrder?.date}
                  />
                </div>
                <div className="w-1/2">
                  <p className="mb-2">預計到貨時間</p>
                  <input
                    type="date"
                    className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
                    defaultValue={defaultOrder?.completed_date}
                  />
                </div>
              </li>
              <li className="mb-2">
                <p className="mb-2">訂單類型</p>
                <input
                  type="text"
                  className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
                  defaultValue={defaultOrder?.type}
                />
              </li>
              <li className="mb-2">
                <p className="mb-2">訂單類型</p>
                <input
                  type="text"
                  className="p-1 focus:outline-none w-full border border-solid border-lightGray rounded-md"
                  defaultValue={defaultOrder?.state}
                />
              </li>
            </ul>
            {/* 商品列表 */}
            <ul className="w-full">
              {itemDetailList ? (
                itemDetailList.map((item: Detail) => (
                  <li
                    className="p-1 border-b border-solid border-lightGray mb-2 last:border-none"
                    key={item._id}
                  >
                    <p>{item.item.name}</p>
                    <div className="flex justify-between ">
                      <span>{item.count}</span>
                      <span>${item.item.price * item.count}</span>
                    </div>
                  </li>
                ))
              ) : (
                <></>
              )}
              {/* 新增商品 */}
              <NewItemButton onClick={handleAddItemBtnClick} />
            </ul>
          </div>
          {/* 結算 */}
          <div className="p-5 border-t border-1 border-lightGray flex items-center justify-between">
            <div>
              <span className="mr-5">總金額</span>
              <span>$100</span>
            </div>
            <div>
              <button className="p-1.5 rounded-md bg-blue text-white mr-5">
                儲存
              </button>
              <Link to="orders">
                <button className="p-1.5 rounded-md bg-white text-blue border border-solid border-blue">
                  取消
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {selectItemOpen ? (
        <SelectItem itemList={itemList} onClick={handleSelectItemClick} />
      ) : (
        <></>
      )}
    </>
  );
};

export default OrderTable;
