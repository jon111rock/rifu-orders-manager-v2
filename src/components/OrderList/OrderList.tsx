import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tableHeads from "./tableHeads";
import Order from "../../types/Order";

type Props = {
  ordersList: Order[] | undefined;
  onOrderClick: (clickedOrderId: string) => void;
};

const MAX_ORDERS = 8;

const OrderList: React.FC<Props> = ({ ordersList, onOrderClick }) => {
  const [list, setList] = useState<Order[]>();

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

  const handleOrderClick = (orderId: string) => {
    onOrderClick(orderId);
  };

  useEffect(() => {
    if (!ordersList) return;
    setList(ordersList);
  }, [ordersList]);

  useEffect(() => {
    if (!ordersList) return;

    setList((currentList) => {
      if (!currentList) return [];
      return addEmptyOrders(currentList);
    });
  }, [ordersList]);

  return (
    <table className="table-auto h-full w-full lg:table hidden">
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
        {list ? (
          list.map((order, key) =>
            order._id ? (
              <tr
                key={order._id}
                className=" cursor-pointer hover:bg-gray"
                onClick={() => {
                  handleOrderClick(order._id);
                }}
              >
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
