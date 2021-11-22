import example from "../../assets/default-img.png";

const ImageSmall = (props) => {
  return (
    <>
      {props.image === "No image provided" ? (
        <img className="image-small" src={example} alt="item thumbnail"></img>
      ) : (
        <img
          className="image-small__image"
          src={`${props.image}`}
          alt="item thumnail"
        />
      )}
    </>
  );
};
export default ImageSmall;
