import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ItemsList from "../components/containers/list-items.component";
import { LoginContext, UserContext, ItemsContext } from "../helpers.js/context";
import Api from "../services/api.service";
import "../scss/home.screen.component.scss";

const HomeScreen = () => {
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
      {!isAuthorised ? (
        <Redirect to="/auth/login" />
      ) : (
        <div className="home-screen">
          <h3 className="home-header">Home</h3>
          <ItemsList data={items} />
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
