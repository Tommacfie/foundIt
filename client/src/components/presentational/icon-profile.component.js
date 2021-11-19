import profile from "../../assets/profile.png";
import "../../scss/components/icon-profile.component.scss";

const ProfileIcon = () => {
  return (
    <div>
      <img src={profile} className="profile-icon" alt="icon-profile"></img>
    </div>
  );
};

export default ProfileIcon;
