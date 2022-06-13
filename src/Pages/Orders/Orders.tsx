import React from "react";

// type Props = {};

const Orders: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen p-7 bg-gray">
      <div className=" text-4xl font-bold mb-5">Orders</div>
      <div className="bg-white h-full p-5 rounded-2xl">
        <ul className=" flex gap-5 text-lg mb-2 text-lightGray ">
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
        <div className="flex gap-1 items-center text-lg relative md:w-fit w-full border border-solid border-lightGray p-1 rounded-xl z-0">
          <i className="bx bx-search text-lightGray"></i>
          <input type="text" className="focus:outline-none md:w-72 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Orders;
