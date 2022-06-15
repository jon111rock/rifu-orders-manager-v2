import axios from "axios";
import Order from "../types/Order";
import Detail from "../types/ItemDetail";

const baseUrl = "https://rifu-order-manager-api.herokuapp.com/api/order";

const getOrders = async () => {
  try {
    const orders = await axios.get(baseUrl);
    return orders.data.result as Order[];
  } catch (error) {
    return null;
  }
};

type postedOrder = {
  date: string;
  completed_date: string;
  type: string;
  state: string;
  details: { item: string; count: number }[];
};

const postOrder = async (userId: string, postOrder: postedOrder) => {
  try {
    await axios.post(`${baseUrl}/${userId}`, postOrder);
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
