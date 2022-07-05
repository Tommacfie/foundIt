import example from "../../assets/default-img.png";

const ImageSmall = (props) => {
  return (
    <>
      {props.image === "No image provided" ? (
        <img className={props.class} src={example} alt="item thumbnail"></img>
      ) : (
        <img
          className={props.class}
          src={`${props.image}`}
          alt="item thumbnail"
        />
      )}
    </>
  );
};
export default ImageSmall;
