import React from "react";
import { useContext, useEffect } from "react";
import ItemsList from "../components/containers/list-items.component";
import { Redirect } from "react-router-dom";
import './home.screen.component.css';
import { LoginContext, UserContext, ItemsContext } from "../helpers.js/context";
import Api from "../services/api.service";

const HomeScreen = (props) => {

  const { currentUser } = useContext(UserContext);
  const { isAuthorised } = useContext(LoginContext);
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    (async () => {
      const items = await Api.getItems(currentUser.accessToken);
      setItems(items);
    })();
  });

  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='/auth/login' />
          :
          <div className='home-screen'>
            <h3 className='home-header'>Home</h3>
            <ItemsList data={items} />
          </div>
      }
    </div>
  )
};

export default HomeScreen;