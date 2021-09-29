import Config from '../config';
import Axios from 'axios';
const Api = {};

Api.login = async (userData) => {
  const response = await fetch(`${Config.server}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const loginSuccess = await response.json();
  return loginSuccess;
}


Api.register = async (userData) => {
  const response = await fetch(`${Config.server}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const newUser = await response.json();
  return newUser
}

Api.getItems = async (authorisation) => {
  const response = await fetch(`${Config.server}/items`, {
    headers: {
      authorization: `Bearer ${authorisation}`
    }
  })
  const items = await response.json();
  return items;
};

Api.postItem = async (item, authorisation) => {
  const response = await fetch(`${Config.server}/items`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${authorisation}`
    },
    body: JSON.stringify(item)
  })
  const postedItem = await response.json();
  return postedItem;
};

Api.deleteItem = async (id, authorisation) => {
  const response = await fetch(`${Config.server}/items`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${authorisation}`
    },
    body: JSON.stringify({ _id: id })
  })
  const deletedItem = await response.json();
  return deletedItem;
};

Api.postImage = async (image) => {
  const response = await Axios.post(Config.imageServer, image)
  return response;
}
export default Api;