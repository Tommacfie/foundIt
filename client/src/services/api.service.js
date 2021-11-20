import Axios from "axios";
import Config from "../config";

const Api = {};

Api.login = async (userData) => {
  try {
    const response = await fetch(`${Config.server}/login`, {
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

Api.register = async (userData) => {
  try {
    const response = await fetch(`${Config.server}/register`, {
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

Api.getItems = async (authorisation) => {
  try {
    const response = await fetch(`${Config.server}/items`, {
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

Api.postItem = async (item, authorisation) => {
  try {
    const response = await fetch(`${Config.server}/items`, {
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
    console.log(error);
    return error;
  }
};

Api.deleteItem = async (id, authorisation) => {
  try {
    const response = await fetch(`${Config.server}/items`, {
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

Api.postImage = async (image) => {
  try {
    const response = await Axios.post(Config.imageServer, image);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export default Api;
