import React from "react";
import { useState, useEffect } from 'react';
import Api from '../services/api.service';
import './main.screen.css';

const HomeScreen = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    (async () => {
      const items = await Api.getItems();
      setItems(items);
    })();
  }, []);

  return (
    <h1>HOME SCREEN</h1>
  )
};

export default HomeScreen;