import { Link } from "react-router-dom";
import back from "../../assets/back.png";

const ButtonBack = (props) => {
  return (
    <div className="button-back">
      <Link to={`${props.link}`}>
        <img src={back} alt={'back button'}/>
      </Link>
    </div>
  );
};
export default ButtonBack;
