import home from "../../assets/home.png";
import "../../scss/components/icon-home.component.scss";

const HomeIcon = () => {
  return (
    <>
      <img src={home} className="home-icon" alt="home-icon"></img>
    </>
  );
};

export default HomeIcon;
