import axios from "axios";
import User from "../types/User";

const baseUrl = "https://rifu-order-manager-api.herokuapp.com/api";

const getUsers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/user`);
    return res.data.result as User[];
  } catch (error) {
    return null;
  }
};

const getOneUser = async (userId: string) => {
  try {
    const res = await axios.get(`${baseUrl}/user/${userId}`);
    return res.data.result as User;
  } catch (error) {
    console.error(error);

    return null;
  }
};

const postUser = async (user: User) => {
  try {
    const res = await axios.post(`${baseUrl}/user`, user);

    return (res.data.result as User)._id;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (user: User) => {
  try {
    const res = await axios.patch(`${baseUrl}/user/${user._id}`, user);
    return res.data.message as string;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers, postUser, updateUser, getOneUser };
