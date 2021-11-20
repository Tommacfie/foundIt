import { Link } from "react-router-dom";

const ButtonLarge = (props) => {
  return (
    <button className="button-lrg" onClick={props.onCLick}>
      <Link to={`${props.link}`}>{props.text}</Link>
    </button>
  );
};
export default ButtonLarge;
