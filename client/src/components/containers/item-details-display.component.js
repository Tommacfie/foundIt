import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ImageLarge from "../presentational/image-lrg.component";
import { ItemContext, UserContext } from "../../helpers.js/context";
import Api from "../../services/api.service";
import ButtonStd from "../presentational/button-std.component";

const ItemDetailsDisplay = () => {
  const history = useHistory();
  const { itemData, setItemData } = useContext(ItemContext);
  const { currentUser } = useContext(UserContext);

  const submitItem = async () => {
    const userId = currentUser._id;

    const image = await Api.postImage(itemData.formData);
    await Api.postItem(
      { ...itemData, submittedBy: userId, image: image.data.url },
      currentUser.accessToken
    );
    await Api.getItems(currentUser.accessToken);
    history.push(`/app/postSubmit`);
    setItemData({});
  };
  // const image = URL.createObjectURL(itemData.image);

  return (
    <div className="item-details-display">
      <h1 className='item-details-display__heading'>
        {itemData.title}, {itemData.brand}
      </h1>
      <ImageLarge image={URL.createObjectURL(itemData.image)} />
      <h3 className='item-details-display__location'>{itemData.location}</h3>
      <p className='item-details-display__description'>{itemData.description}</p>
      <div onClick={() => submitItem()}>
        <ButtonStd text={"Submit"} />
      </div>
    </div>
  );
};
export default ItemDetailsDisplay;
