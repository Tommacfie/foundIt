import profile from "../../assets/profile.png";
import "../../scss/components/icon-profile.component.scss";

const ProfileIcon = () => {
  return (
    <>
      <img src={profile} className="profile-icon" alt="icon-profile"></img>
    </>
  );
};

export default ProfileIcon;
