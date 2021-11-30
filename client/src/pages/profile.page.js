import { Redirect } from "react-router-dom";
import { useContext, useEffect } from "react";

import ItemsList from "../components/containers/list-items.component";
import { LoginContext, UserContext, ItemsContext } from "../helpers.js/context";

import Api from "../services/api.service";

const ProfileView = () => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { items, setItems } = useContext(ItemsContext);

  const logout = () => {
    setCurrentUser({});
    setIsAuthorised(false);
  };
  const myList = items.filter((item) => {
    return item.submittedBy === currentUser._id;
  });

useEffect(() => {
  const fetchItems = async () => {
    const items = await Api.getItems(currentUser.accessToken);
    setItems(items);
  }
  fetchItems();
},[]);


  return (
    <>
      {!isAuthorised ? (
        <Redirect to="/auth/login" />
      ) : (
        <>
          {!myList.length ? (
            <h1>No items to display</h1>
          ) : (
            <div className="profile-page">
              <h1 className="profile-page__header">Your Items</h1>
              <ItemsList class={"profile-page__items-list"} data={myList} />
            </div>
          )}
          <button className="button-std-light" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </>
  );
};

export default ProfileView;
