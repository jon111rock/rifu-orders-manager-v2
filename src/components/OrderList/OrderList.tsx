import React, { useEffect, useState } from "react";
import tableHeads from "./tableHeads";
import { getOrders } from "../../api/orderApi";
import Order from "../../types/Order";

const MAX_ORDERS = 8;

const OrderList: React.FC = () => {
  const [ordersList, setOrdersList] = useState<Order[]>();

  const addEmptyOrders = (list: Order[]) => {
    if (list.length >= 8) return list;
    const newList: Order[] = [];
    for (let i = 0; i < MAX_ORDERS; i++) {
      if (list[i]) {
        newList.push(list[i]);
      } else {
        newList.push({} as Order);
      }
    }

    return newList;
  };

  //寫在其他組件
  useEffect(() => {
    getOrders().then((res) => {
      if (!res) return;
      setOrdersList(res);
    });
  }, []);

  useEffect(() => {
    if (!ordersList) return;

    setOrdersList((currentList) => {
      if (!currentList) return [];
      return addEmptyOrders(currentList);
    });
  }, [ordersList]);

  return (
    <table className="table-auto h-full w-full">
      <thead>
        <tr>
          {tableHeads.map((head) => (
            <th
              className="p-2 text-left bg-lightGreen first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
              key={head}
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ordersList ? (
          ordersList.map((order, key) =>
            order._id ? (
              <tr key={order._id} className=" cursor-pointer hover:bg-gray">
                <td className="p-2">{order._id}</td>
                <td className="p-2">{order.user.name}</td>
                <td className="p-2">{order.user.address}</td>
                <td className="p-2">{order.user.phone_number}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">{order.state}</td>
              </tr>
            ) : (
              <tr key={key}>
                <td>&nbsp;</td>
              </tr>
            )
          )
        ) : (
          <tr>
            <td>Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default OrderList;
