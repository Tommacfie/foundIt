import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ImageLarge from "../presentational/image-lrg.component";
import { ItemContext, UserContext } from "../../helpers/context";
import * as Api from "../../services/apiservice";

const ItemDetailsDisplay = () => {
  const history = useHistory();
  const { itemData, setItemData } = useContext(ItemContext);
  const { currentUser } = useContext(UserContext);

  const submitItem = async () => {
    const userId = currentUser._id;
    try {
      const image = await Api.postImage(itemData.formData);
      await Api.postItem(
        { ...itemData, submittedBy: userId, image: image.data.url },
        currentUser.accessToken
      );
      await Api.getItems(currentUser.accessToken);
      history.push(`/app/postSubmit`);
      setItemData({});
    } catch (error) {
      console.log(error);
      alert("Error submitting item. Please try again.");
    }
  };

  return (
    <div className="item-details-display">
      <h1 className="item-details-display__header">Item Submission</h1>
      <h2 className="item-details-display__subheader">
        {itemData.title}, {itemData.brand}
      </h2>
      <p className="item-details-display__location">{itemData.location}</p>
      <ImageLarge
        class="item-details-display__image"
        image={URL.createObjectURL(itemData.image)}
      />
      <p className="item-details-display__description">
        {itemData.description}
      </p>
      <button className="button-std-dark" onClick={submitItem}>
        Submit
      </button>
    </div>
  );
};
export default ItemDetailsDisplay;
