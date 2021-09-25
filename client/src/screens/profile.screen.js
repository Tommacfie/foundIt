import ItemsList from "../components/containers/list-items.component";
import ButtonStd from "../components/presentational/button-std.component";
import { Redirect } from 'react-router-dom';
import './profile.screen.css';

const ProfileView = (props) => {
  const isAuthorised = props.auth;
  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='login' />
          :
          <div className='profile-screen'>
            <h3 className='profile-header'>Your Items</h3>
            <ItemsList data={props.data} />
          </div>
      }
    </div>
  )
};

export default ProfileView;