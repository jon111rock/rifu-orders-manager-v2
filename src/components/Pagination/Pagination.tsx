import React, { useState, useEffect } from "react";

type Props = {
  onChangePage?: (pageName: string) => void;
};

const Pagination: React.FC<Props> = ({ onChangePage }) => {
  const [selectedPage, setSelectedPage] = useState<string>("所有訂單");

  useEffect(() => {
    if (!onChangePage) return;
    onChangePage(selectedPage);
  }, [selectedPage, onChangePage]);

  return (
    <ul className=" flex gap-5 mb-2 text-lightGray ">
      <li
        className={`pagination ${selectedPage === "所有訂單" ? "active" : ""}`}
        onClick={() => {
          setSelectedPage("所有訂單");
        }}
      >
        所有訂單 <span className="p-1 bg-gray rounded-lg">80</span>
      </li>
      <li
        className={`pagination ${selectedPage === "準備中" ? "active" : ""}`}
        onClick={() => {
          setSelectedPage("準備中");
        }}
      >
        準備中 <span className="p-1 bg-gray rounded-lg">80</span>
      </li>
      <li
        className={`pagination ${selectedPage === "已出貨" ? "active" : ""}`}
        onClick={() => {
          setSelectedPage("已出貨");
        }}
      >
        已出貨 <span className="p-1 bg-gray rounded-lg">70</span>
      </li>
      <li
        className={`pagination ${selectedPage === "已完成" ? "active" : ""}`}
        onClick={() => {
          setSelectedPage("已完成");
        }}
      >
        已完成 <span className="p-1 bg-gray rounded-lg">50</span>
      </li>
    </ul>
  );
};

export default Pagination;
