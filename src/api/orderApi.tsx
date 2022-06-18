import axios from "axios";
import Order from "../types/Order";

const baseUrl = `${process.env.REACT_APP_URL}/order`;

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

const updateOrder = async (orderId: string, updatedOrder: postedOrder) => {
  try {
    await axios.patch(`${baseUrl}/${orderId}`, updatedOrder);
  } catch (error) {
    console.log(error);
  }
};

const deleteOrder = async (orderId: string) => {
  try {
    await axios.delete(`${baseUrl}/${orderId}`);
  } catch (error) {
    console.error(error);
  }
};

export { getOrders, postOrder, deleteOrder, updateOrder };
