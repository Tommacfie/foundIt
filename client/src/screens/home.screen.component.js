import React from "react";
import { useContext, useEffect, useState } from "react";
import ItemsList from "../components/containers/list-items.component";
import { Redirect } from "react-router-dom";
import './home.screen.component.css';
import { LoginContext, UserContext } from "../helpers.js/context";
import Api from "../services/api.service";

const HomeScreen = (props) => {

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);

  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='/auth/login' />
          :
          <div className='home-screen'>
            <h3 className='home-header'>Home</h3>
            <ItemsList data={props.data} />
          </div>
      }
    </div>
  )
};

export default HomeScreen;