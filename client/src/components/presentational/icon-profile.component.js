import "./icon-profile.component.css";
import profile from "../../assets/profile.png";

const ProfileIcon = () => {
  return (
    <div>
      <img src={profile} className="profile-icon" alt="icon-profile"></img>
    </div>
  );
};

export default ProfileIcon;
