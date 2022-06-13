import axios from "axios";
import Order from "../types/Order";

const getOrders = async () => {
  try {
    const orders = await axios.get(
      "https://rifu-order-manager-api.herokuapp.com/api/order"
    );
    return orders.data.result as Order[];
  } catch (error) {
    return null;
  }
};

export { getOrders };
