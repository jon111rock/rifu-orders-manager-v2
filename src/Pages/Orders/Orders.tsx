import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import OrderList from "../../components/OrderList";
import SearchBar from "../../components/SearchBar";
import Pagination from "../../components/Pagination";
import Order from "../../types/Order";

type Props = {
  ordersList: Order[] | undefined;
  // onOrderClick: (clickedOrderId: string) => void;
};

const Orders: React.FC<Props> = ({ ordersList }) => {
  const navigate = useNavigate();
  const [displayList, setDisplayList] = useState<Order[]>();

  const handleOrderClick = (orderId: string) => {
    navigate(`/orders/${orderId}`);
  };

  const handleChangePagination = (pageName: string) => {
    //todo: change display orders by pagination
    if (!ordersList) return;
    const filteredList = ordersList.reduce((list: Order[], order) => {
      if (pageName === "所有訂單") {
        list.push(order);
      } else if (order.state === pageName) {
        list.push(order);
      }
      return list;
    }, []);
    setDisplayList(filteredList);
  };

  // init displayList
  useEffect(() => {
    if (!ordersList) return;
    setDisplayList(ordersList);
  }, [ordersList]);

  return (
    <div className="flex flex-col w-screen h-screen p-7 bg-gray">
      <div className=" text-4xl font-bold mb-5">Orders</div>
      <div className="flex flex-col bg-white h-full p-5 rounded-2xl relative">
        <Pagination
          onChangePage={(pageName) => {
            handleChangePagination(pageName);
          }}
        />
        <div className="flex justify-between mb-4">
          <SearchBar />
          <Link to="/orders/new">
            <button className="p-2  rounded-md bg-blue text-white">
              新增訂單
            </button>
          </Link>
        </div>
        <OrderList ordersList={displayList} onOrderClick={handleOrderClick} />
        {/* CardList */}
      </div>
    </div>
  );
};

export default Orders;
