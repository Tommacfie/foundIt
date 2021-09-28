import ItemsList from "../components/containers/list-items.component";
import ButtonStd from "../components/presentational/button-std.component";
import { Redirect } from 'react-router-dom';
import './profile.screen.css';
import { useContext, useState, useEffect } from "react";
import { LoginContext, UserContext } from "../helpers.js/context";


const ProfileView = (props) => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logout = () => {
    setCurrentUser({});
    setIsAuthorised(false);
  }
  const myList = props.data.filter(item => {
    return item.submittedBy === currentUser._id
  })

  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='/auth/login' />
          :
          <div className='profile-screen'>
            {!myList.length
              ? <h2>No items to display</h2>
              : <div>
                <h3 className='profile-header'>Your Items</h3>
                <ItemsList data={myList} />
              </div>
            }
            <div onClick={() => logout()}>
              <ButtonStd text={'Logout'} />
            </div>
          </div>
      }
    </div>
  )
};

export default ProfileView;