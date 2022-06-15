import User from "./User";
import Detail from "./ItemDetail";

type Order = {
  _id?: string;
  user: User;
  date: string;
  completed_date: string;
  type: string;
  state: string;
  details: Detail[];
};

export default Order;
