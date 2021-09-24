import React from 'react-native';
import Config from '../config';
const Api = {};

const login = async () => { }
const register = async () => { }

Api.getItems = async () => {
  const response = await fetch(`${Config.server}/items`, {
    headers: {
      authorization: Config.token
    }
  })
  const items = await response.json();
  return items;
};

Api.postItem = async (item) => {
  const response = await fetch(`${Config.server}/items`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: Config.token
    },
    body: JSON.stringify(item)
  })
  const postedItem = await response.json();
  return postedItem;
};

Api.deleteItem = async (id) => {
  const response = await fetch(`${Config.server}/items`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: Config.token
    },
    body: JSON.stringify({ _id: id })
  })
  const deletedItem = await response.json();
  return deletedItem;
};

export default Api;