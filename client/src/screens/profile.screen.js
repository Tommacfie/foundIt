import ItemsList from "../components/containers/list-items.component";
import ButtonStd from "../components/presentational/button-std.component";
import { Redirect } from 'react-router-dom';
import './profile.screen.css';
import { useContext } from "react";
import { LoginContext } from "../helpers.js/context";

const ProfileView = (props) => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  console.log(isAuthorised, 'profile');
  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='/auth/login' />
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