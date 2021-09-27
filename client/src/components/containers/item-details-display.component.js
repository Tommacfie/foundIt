import ImageLarge from "../presentational/image-lrg.component";
import './item-details-display.component.css';
import { useContext, useState } from "react";
import { ItemContext, LoginContext } from "../../helpers.js/context";
import Api from "../../services/api.service";

const ItemDetailsDisplay = (props) => {

  const { itemData, setItemData } = useContext(ItemContext)
  console.log(itemData, 'details');

  return (
    <div className='item-details-display'>
      {/* <ImageLarge image={`${props.image}`} /> */}
      <h1>{itemData.title}</h1>
      <h1>{itemData.brand}</h1>
      <h3>{itemData.location}</h3>
      <p>{itemData.description}</p>
    </div>
  )
}
export default ItemDetailsDisplay;