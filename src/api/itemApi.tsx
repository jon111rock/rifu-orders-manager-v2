import axios from "axios";
import Item from "../types/Item";

const getItems = async () => {
  try {
    const res = await axios.get(
      "https://rifu-order-manager-api.herokuapp.com/api/item"
    );
    return res.data.result as Item[];
  } catch (error) {
    return null;
  }
};

export { getItems };
