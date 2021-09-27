import ImageLarge from "../presentational/image-lrg.component";
import './item-details-display.component.css';
import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { ItemContext, LoginContext } from "../../helpers.js/context";
import Api from "../../services/api.service";
import ButtonStd from "../presentational/button-std.component";

const ItemDetailsDisplay = (props) => {
  const history = useHistory();

  const { itemData, setItemData } = useContext(ItemContext)

  const submitItem = async () => {
    console.log('SUBMIT');
    //API POST
    //FIXME - Add userID and token to request
    const item = await Api.postItem({ ...itemData, submittedBy: 'me' });
    setItemData({});
    history.push(`/app/postSubmit`);
  }

  return (
    <div className='item-details-display' >
      <ImageLarge image={`${props.image}`} />
      <h1> {itemData.title}</h1>
      <h1>{itemData.brand}</h1>
      <h3>{itemData.location}</h3>
      <p>{itemData.description}</p>
      <div onClick={() => submitItem()}>
        <ButtonStd text={'Submit'} />
      </div>
    </div>
  )
}
export default ItemDetailsDisplay;