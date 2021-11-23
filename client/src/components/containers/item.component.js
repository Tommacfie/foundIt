import ImageSmall from "../presentational/image-small.component";

const Item = (props) => {
  const displayDetails = () => {};
  return (
    <div
      className={`item ${props.data.lostOrFound ? "lost" : "found"}`}
      onClick={() => displayDetails()}
    >
      <>
        <ImageSmall class={"item__image"} image={props.data.image} />
      </>
      <div className="item__text">
        <h2 className="item__header">{`${props.data.title}`}</h2>
        <p className="item__header--location">{`${props.data.location}`}</p>
        {/* <p className="item__description">{props.data.description}</p> */}
      </div>
    </div>
  );
};
export default Item;
