import React from 'react-native';
import server from '../config';

const Api = {};

const login = async () => { }
const register = async () => { }

Api.getItems = async () => {
  // console.log(server, 'server');
  const items = await fetch(`${server}/items`, {
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTRjYTdhZDc5NjI5NTA3YThiNjMwM2YiLCJpYXQiOjE2MzI0OTEwOTJ9.1QBvUMfsnjB4osRo2ixJmH0vPxoVW_N25ZDW17iqPBA'
    }
  })
  return items.json();
};

Api.postItem = async (item) => {
  const response = await fetch(`${server}/items`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTRjYTdhZDc5NjI5NTA3YThiNjMwM2YiLCJpYXQiOjE2MzI0OTEwOTJ9.1QBvUMfsnjB4osRo2ixJmH0vPxoVW_N25ZDW17iqPBA'
    },
    body: JSON.stringify(item)
  })
  const postedItem = await response.json();
  return postedItem;
};

const deleteItem = async () => {


}
export default Api;