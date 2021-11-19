import home from "../../assets/home.png";
import "../../scss/components/icon-home.component.scss";

const HomeIcon = () => {
  return (
    <div>
      <img src={home} className="home-icon" alt="home-icon"></img>
    </div>
  );
};

export default HomeIcon;
