import React from "react";
import { useState, useEffect } from 'react';
import Api from '../services/api.service';
import ItemsList from "../components/containers/list-items.component";
import './main.screen.css';

const HomeScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const items = await Api.getItems();
      setItems(items);
    })();
  }, []);

  return (
    <ItemsList data={items} />
  )
};

export default HomeScreen;