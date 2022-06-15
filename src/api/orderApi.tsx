import axios from "axios";
import Order from "../types/Order";

const baseUrl = "https://rifu-order-manager-api.herokuapp.com/api/order";

const getOrders = async () => {
  try {
    const orders = await axios.get(baseUrl);
    return orders.data.result as Order[];
  } catch (error) {
    return null;
  }
};

const postOrder = async (order: Order) => {
  try {
    await axios.post(baseUrl, order);
  } catch (error) {
    console.error(error);
  }
};

const deleteOrder = async (orderId: string) => {
  try {
    await axios.delete(`${baseUrl}/${orderId}`);
  } catch (error) {
    console.error(error);
  }
};

export { getOrders, postOrder, deleteOrder };
