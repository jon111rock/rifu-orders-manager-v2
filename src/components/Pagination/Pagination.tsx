import React from "react";

type Props = {};

const Pagination = (props: Props) => {
  return (
    <ul className=" flex gap-5 mb-2 text-lightGray ">
      <li className="p-1 cursor-pointer transition-all duration-300 hover:text-blueGrean">
        準備中 <span className="p-1 bg-gray rounded-lg">80</span>
      </li>
      <li className="p-1 cursor-pointer transition-all duration-300 hover:text-blueGrean">
        已出貨 <span className="p-1 bg-gray rounded-lg">70</span>
      </li>
      <li className="p-1 cursor-pointer transition-all duration-300 hover:text-blueGrean">
        已完成 <span className="p-1 bg-gray rounded-lg">50</span>
      </li>
    </ul>
  );
};

export default Pagination;
