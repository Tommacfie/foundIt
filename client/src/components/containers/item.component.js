import ImageSmall from "../presentational/image-small.component";
import "./item.component.css";

const Item = (props) => {
  const displayDetails = () => {};
  return (
    <div
      className={`item ${props.data.lostOrFound ? "lost" : "found"}`}
      onClick={() => displayDetails()}
    >
      <div className="item-image">
        <ImageSmall image={props.data.image} />
      </div>
      <div className="item-text">
        <h3>
          {props.data.title} - {props.data.location}
        </h3>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
};
export default Item;
