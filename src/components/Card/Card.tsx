import React from "react";
import Order from "../../types/Order";
import { changeStateStyle } from "../../helpers/stateStyleHelper";

type Props = {
  order: Order;
  onClick?: (orderId: string) => void;
};

const Card: React.FC<Props> = ({ order, onClick }) => {
  return (
    <ul
      className="md:hidden relative flex flex-col gap-2 bg-white p-5 rounded-xl"
      onClick={(e) => {
        if (!onClick) return;
        onClick(order._id);
      }}
    >
      <li
        className="font-bold text-xl"
        dangerouslySetInnerHTML={{ __html: order.user.name }}
      ></li>
      <li dangerouslySetInnerHTML={{ __html: order.user.address }}></li>
      <li dangerouslySetInnerHTML={{ __html: order.user.phone_number }}></li>
      <li
        className={`${changeStateStyle(order.state)} absolute right-3 bottom-3`}
      >
        {order.state}
      </li>
    </ul>
  );
};

export default Card;
