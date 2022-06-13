import React from "react";
import OrderList from "../../components/OrderList";
import SearchBar from "../../components/SearchBar";
import Pagination from "../../components/Pagination";
import Order from "../../types/Order";

type Props = {
  ordersList: Order[] | undefined;
  onOrderClick: (clickedOrderId: string) => void;
};

const Orders: React.FC<Props> = ({ ordersList, onOrderClick }) => {
  return (
    <div className="flex flex-col w-screen h-screen p-7 bg-gray">
      <div className=" text-4xl font-bold mb-5">Orders</div>
      <div className="flex flex-col bg-white h-full p-5 rounded-2xl relative">
        <Pagination />
        <div className="flex justify-between mb-4">
          <SearchBar />
          <button className="p-2  rounded-md bg-blue text-white">
            新增訂單
          </button>
        </div>
        <OrderList ordersList={ordersList} onOrderClick={onOrderClick} />
        {/* CardList */}
      </div>
    </div>
  );
};

export default Orders;
