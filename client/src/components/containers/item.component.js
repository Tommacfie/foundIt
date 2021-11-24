import { useContext } from "react";
import ImageSmall from "../presentational/image-small.component";
import { useHistory } from "react-router-dom";
import { ItemsContext, UserContext } from "../../helpers.js/context";
import Api from "../../services/api.service";

const Item = (props) => {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);

  const clickLink = async () => {
    try {
      await Api.deleteItem(props.data._id, currentUser.accessToken);
      await Api.getItems(currentUser.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`item ${props.data.lostOrFound ? "lost" : "found"}`}
      onClick={clickLink}
    >
      <>
        <ImageSmall class={"item__image"} image={props.data.image} />
      </>
      <div className="item__text">
        <h2 className="item__header">{`${props.data.title}`}</h2>
        <p className="item__header--location">{`${props.data.location}`}</p>
      </div>
    </div>
  );
};
export default Item;
