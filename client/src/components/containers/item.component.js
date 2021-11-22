import ImageSmall from "../presentational/image-small.component";

const Item = (props) => {
  const displayDetails = () => {};
  return (
    <div
      className={`item ${props.data.lostOrFound ? "lost" : "found"}`}
      onClick={() => displayDetails()}
    >
      <div className="item__image">
        <ImageSmall image={props.data.image} />
      </div>
      <div className="item__text">
        <h3 className="item__header">
          {props.data.title} - {props.data.location}
        </h3>
        <p className="item__description">{props.data.description}</p>
      </div>
    </div>
  );
};
export default Item;
