import React from "react";
import { useState, useEffect } from 'react';
import Api from '../services/api.service';
import ItemsList from "../components/containers/list-items.component";
import ItemDetailsDisplay from "../components/containers/item-details-display.component";
import ModalDelete from "../components/containers/modal-delete.component";
import './main.screen.css';

const HomeScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const items = await Api.getItems();
      setItems(items);
    })();
  }, []);

  //DELETEME
  const item = {
    brandModel: "Gold",
    description: "Diamond encrusted. Engraving inside. My wife had the engraving done on my birthday. It was a very special day",
    image: "www.diamonds.com",
    location: "Waterloo beach, Liverpool",
    lostOrFound: true,
    submittedBy: "Divorced",
    title: "Wedding Ring",
    _id: "614f0bcb36dc72798845b6e3"
  }

  return (
    // <ItemsList data={items} />
    // <ItemDetailsDisplay data={item} />
    <ModalDelete />

  )
};

export default HomeScreen;