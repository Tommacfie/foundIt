import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ItemsList from "../components/containers/list-items.component";
import { LoginContext, UserContext, ItemsContext } from "../helpers.js/context";
import Api from "../services/api.service";

const HomeScreen = () => {
  const { currentUser } = useContext(UserContext);
  const { isAuthorised } = useContext(LoginContext);
  const { items, setItems } = useContext(ItemsContext);

  const fetchItems = async () => {
    const items = await Api.getItems(currentUser.accessToken);
    setItems(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {!isAuthorised ? (
        <Redirect to="/auth/login" />
      ) : (
        <div className="home-screen">
          <h3 className="home-screen__header">Home</h3>
          <ItemsList data={items} />
        </div>
      )}
    </>
  );
};

export default HomeScreen;
