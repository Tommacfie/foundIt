import React from "react";
import { useContext, useEffect, useState } from "react";
import ItemsList from "../components/containers/list-items.component";
import { Redirect } from "react-router-dom";
import './home.screen.component.css';
import { LoginContext, UserContext, ItemsContext } from "../helpers.js/context";
import Api from "../services/api.service";

const HomeScreen = (props) => {

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    (async () => {
      const items = await Api.getItems(currentUser.accessToken);
      setItems(items);
    })();
  }, []);

  return (
    <div className='home-screen'>
      {
        !isAuthorised
          ? <Redirect to='/auth/login' />
          :
          <div >
            <h3 className='home-header'>Home</h3>
            <ItemsList data={items} />
          </div>
      }
    </div>
  )
};

export default HomeScreen;