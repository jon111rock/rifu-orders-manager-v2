import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "../Card";
import Order from "../../types/Order";

type Props = {
  ordersList?: Order[];
};

const OrderCardList: React.FC<Props> = ({ ordersList }) => {
  const navigate = useNavigate();

  return (
    <ul className="flex flex-col gap-5 md:hidden">
      {ordersList
        ? ordersList.map((order) => (
            <li key={order._id}>
              <Card
                order={order}
                onClick={(orderId: string) => {
                  navigate(`${orderId}`);
                }}
              />
            </li>
          ))
        : ""}
    </ul>
  );
};

export default OrderCardList;
