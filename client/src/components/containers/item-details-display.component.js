import ImageLarge from "../presentational/image-lrg.component";
import './item-details-display.component.css';
import { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { ItemContext, UserContext } from "../../helpers.js/context";
import Api from "../../services/api.service";
import ButtonStd from "../presentational/button-std.component";

const ItemDetailsDisplay = (props) => {
  const history = useHistory();
  const { itemData, setItemData } = useContext(ItemContext)
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const submitItem = async () => {
    const userId = currentUser._id;

    const image = await Api.postImage(itemData.formData);
    await Api.postItem({ ...itemData, submittedBy: userId, image: image.data.url }, currentUser.accessToken);
    await Api.getItems(currentUser.accessToken);
    history.push(`/app/postSubmit`);
    setItemData({});
  }
  // const image = URL.createObjectURL(itemData.image);

  return (
    <div className='item-details-display' >
      <h1> {itemData.title}, {itemData.brand}</h1>
      <ImageLarge image={URL.createObjectURL(itemData.image)} />
      <h3>{itemData.location}</h3>
      <p>{itemData.description}</p>
      <div onClick={() => submitItem()}>
        <ButtonStd text={'Submit'} />
      </div>
    </div>
  )
}
export default ItemDetailsDisplay;