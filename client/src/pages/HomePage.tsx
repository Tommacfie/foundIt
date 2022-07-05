import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ItemsList from "../components/containers/ItemList";
import { LoginContext, UserContext, ItemsContext } from "../helpers/Context";
import * as Api from "../services/ApiService";

const HomeScreen = () => {
  const { currentUser } = useContext(UserContext);
  const { isAuthorised } = useContext(LoginContext);
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await Api.getItems(currentUser.accessToken);
      setItems(items);
    };
    fetchItems();
  }, []);

  return (
    <>
      {!isAuthorised ? (
        <Redirect to="/auth/login" />
      ) : (
        <>
          {!items.length ? (
            <h1>No items to display</h1>
          ) : (
            <div className="home-page">
              <h1 className="home-page__header">Home</h1>
              <ItemsList class={"home-page__items-list"} data={items} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HomeScreen;
