import { useContext } from "react";
import ImageSmall from "../presentational/image-small.component";
import { useHistory } from "react-router-dom";
import { ItemContext } from "../../helpers.js/context";

const Item = (props) => {
  const history = useHistory();
  const { itemData, setItemData } = useContext(ItemContext);

  const clickLink = async () => {
    try {
      //  setItemData({
      //   lostOrFound: props.data.lostOrFound,
      //   title: props.data.title,
      //   brand: props.data.brand,
      //   location: props.data.location,
      //   image: props.data.image,
      //   description: props.data.descreiption,
      // });

    } catch (error) {
      console.log(error);
    }
    history.push("/app/detail");
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
