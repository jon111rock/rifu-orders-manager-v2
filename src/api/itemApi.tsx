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

const deleteItem = async (itemId: string) => {
  try {
    await axios.delete(`${baseUrl}/${itemId}`);
  } catch (error) {
    console.error(error);
  }
};

const updateItem = async (
  itemId: string,
  item: { name: string; price: number }
) => {
  try {
    await axios.patch(`${baseUrl}/${itemId}`, item);
  } catch (error) {
    console.error(error);
  }
};

export { getItems, createItem, deleteItem, updateItem };
