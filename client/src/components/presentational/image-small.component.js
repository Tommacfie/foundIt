import example from "../../assets/default-img.png";
import "../../scss/components/image-small.component.scss";

const ImageSmall = (props) => {
  return (
    <div className="image-small">
      {props.image === "No image provided" ? (
        <img className="image-small" src={example} alt="item thumbnail"></img>
      ) : (
        <img
          className="image-small__image"
          src={`${props.image}`}
          alt="item thumnail"
        />
      )}
    </div>
  );
};
export default ImageSmall;
