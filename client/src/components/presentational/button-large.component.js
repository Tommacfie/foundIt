import { Link } from "react-router-dom";
import "../../scss/components/button-large.component.scss";

const ButtonLarge = (props) => {
  return (
    <div className="button-lrg">
      <Link to={`${props.link}`}>{props.text}</Link>
    </div>
  );
};
export default ButtonLarge;
