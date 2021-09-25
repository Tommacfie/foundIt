import './icon-profile.component.css';
import profile from '../../assets/profile.png';

const ProfileIcon = () => {
  return (
    <div>
      <img src={profile} className='profile-icon'></img>
    </div>
  )
}

export default ProfileIcon;