import ImageSmall from "../presentational/image-small.component";

const Item = (props) => {
  const displayDetails = () => {};
  return (
    <div
      className={`item ${props.data.lostOrFound ? "lost" : "found"}`}
      onClick={() => displayDetails()}
    >
      <>
        <ImageSmall image={props.data.image} />
      </>
      <div className="item__text">
        <h3 className="item__header">
          {props.data.title} -{" "}
          <span className="item__header--location">{props.data.location}</span>
        </h3>
        {/* <p className="item__description">{props.data.description}</p> */}
      </div>
    </div>
  );
};
export default Item;
