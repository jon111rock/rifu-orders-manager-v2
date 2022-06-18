import axios from "axios";
import Item from "../types/Item";

const baseUrl = "https://rifu-order-manager-api.herokuapp.com/api/item";

const getItems = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data.result as Item[];
  } catch (error) {
    return null;
  }
};

const createItem = async (item: { name: string; price: number }) => {
  try {
    await axios.post(baseUrl, item);
  } catch (error) {
    console.error(error);
  }
};

export { getItems, createItem };
