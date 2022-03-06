import Axios from "axios";
import { server, imageServer } from "../config";
import { Item, UserLogin, UserRegistration } from "../interfaces/Types";

export const login = async (userData:UserLogin) => {
  try {
    const response = await fetch(`${server}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const loginSuccess = await response.json();
    return loginSuccess;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const register = async (userData:UserRegistration) => {
  try {
    const response = await fetch(`${server}/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getItems = async (authorisation:string) => {
  try {
    const response = await fetch(`${server}/items`, {
      headers: {
        authorization: `Bearer ${authorisation}`,
      },
    });
    const items = await response.json();
    return items;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postItem = async (item:Item, authorisation:string) => {
  try {
    const response = await fetch(`${server}/items`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${authorisation}`,
      },
      body: JSON.stringify(item),
    });
    const postedItem = await response.json();
    return postedItem;
  } catch (error) {
    console.log('Error in postItem:', error);
    return error;
  }
};

export const postImage = async (image: string) => {
  try {
    const response = await Axios.post(imageServer, image);
    return response;
  } catch (error) {
    console.log('Error in postImage:', error);
    return error;
  }
};

export const deleteItem = async (id:string, authorisation:string) => {
  try {
    const response = await fetch(`${server}/items`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${authorisation}`,
      },
      body: JSON.stringify({ _id: id }),
    });
    const deletedItem = await response.json();
    return deletedItem;
  } catch (error) {
    console.log(error);
    return error;
  }
};
