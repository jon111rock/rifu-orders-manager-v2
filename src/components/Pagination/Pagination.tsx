import React, { useState, useEffect } from "react";
import Order from "../../types/Order";

type Props = {
  onChangePage: (pageName: string) => void;
  ordersList?: Order[];
};

const Pagination: React.FC<Props> = ({ onChangePage, ordersList }) => {
  const [selectedPage, setSelectedPage] = useState<string>("所有訂單");

  const computeOrderCount = (str: string, list?: Order[]) => {
    if (!list) return;
    return list.reduce((acc, order) => {
      if (str === "所有訂單") return (acc += 1);
      if (str === "準備中") {
        if (order.state === "準備中") return (acc += 1);
      }
      if (str === "已出貨") {
        if (order.state === "已出貨") return (acc += 1);
      }
      if (str === "已完成") {
        if (order.state === "已完成") return (acc += 1);
      }
      return acc;
    }, 0);
  };

  useEffect(() => {
    if (!onChangePage) return;

    onChangePage(selectedPage);
  }, [onChangePage, selectedPage]);

  return (
    <ul className=" flex gap-5 mb-2 text-lightGray ">
      <li
        className={`pagination ${selectedPage === "所有訂單" ? "active" : ""}`}
        onClick={() => {
          setSelectedPage("所有訂單");
        }}
      >
        所有訂單
        <span className="p-1 bg-gray rounded-lg">
          {computeOrderCount("所有訂單", ordersList)}
        </span>
      </li>
      <li
        className={`pagination ${selectedPage === "準備中" ? "active" : ""}`}
        onClick={() => {
          setSelectedPage("準備中");
        }}
      >
        準備中
        <span className="p-1 bg-gray rounded-lg">
          {computeOrderCount("準備中", ordersList)}
        </span>
      </li>
      <li
        className={`pagination ${selectedPage === "已出貨" ? "active" : ""}`}
        onClick={() => {
          setSelectedPage("已出貨");
        }}
      >
        已出貨
        <span className="p-1 bg-gray rounded-lg">
          {computeOrderCount("已出貨", ordersList)}
        </span>
      </li>
      <li
        className={`pagination ${selectedPage === "已完成" ? "active" : ""}`}
        onClick={() => {
          setSelectedPage("已完成");
        }}
      >
        已完成
        <span className="p-1 bg-gray rounded-lg">
          {computeOrderCount("已完成", ordersList)}
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
