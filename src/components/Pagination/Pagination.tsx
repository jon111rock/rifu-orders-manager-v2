import React, { useState } from "react";

type Props = {};

const Pagination = (props: Props) => {
  const [isActive, setIsActive] = useState<string>("所有訂單");

  return (
    <ul className=" flex gap-5 mb-2 text-lightGray ">
      <li
        className={`pagination ${isActive === "所有訂單" ? "active" : ""}`}
        onClick={() => {
          setIsActive("所有訂單");
        }}
      >
        所有訂單 <span className="p-1 bg-gray rounded-lg">80</span>
      </li>
      <li
        className={`pagination ${isActive === "準備中" ? "active" : ""}`}
        onClick={() => {
          setIsActive("準備中");
        }}
      >
        準備中 <span className="p-1 bg-gray rounded-lg">80</span>
      </li>
      <li
        className={`pagination ${isActive === "已出貨" ? "active" : ""}`}
        onClick={() => {
          setIsActive("已出貨");
        }}
      >
        已出貨 <span className="p-1 bg-gray rounded-lg">70</span>
      </li>
      <li
        className={`pagination ${isActive === "已完成" ? "active" : ""}`}
        onClick={() => {
          setIsActive("已完成");
        }}
      >
        已完成 <span className="p-1 bg-gray rounded-lg">50</span>
      </li>
    </ul>
  );
};

export default Pagination;
