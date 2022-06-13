import React from "react";

// type Props = {};

const Orders: React.FC = () => {
  return (
    <div className="w-screen h-screen px-7 bg-gray">
      <div className="text-4xl font-bold my-5">Orders</div>
      <div>
        <ul className="flex gap-5 text-lg mb-5">
          <li>準備中</li>
          <li>已出貨</li>
          <li>已完成</li>
        </ul>
      </div>
      <div>Search</div>
    </div>
  );
};

export default Orders;
