import { Redirect } from "react-router-dom";
import { useContext } from "react";

import ItemsList from "../components/containers/list-items.component";
import { LoginContext, UserContext, ItemsContext } from "../helpers.js/context";

const ProfileView = () => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { items } = useContext(ItemsContext);

  const logout = () => {
    setCurrentUser({});
    setIsAuthorised(false);
  };
  const myList = items.filter((item) => {
    return item.submittedBy === currentUser._id;
  });

  return (
    <>
      {!isAuthorised ? (
        <Redirect to="/auth/login" />
      ) : (
        <>
          {!myList.length ? (
            <h2>No items to display</h2>
          ) : (
            <div className="profile-page">
              <h3 className="profile-page__header">Your Items</h3>
              <ItemsList className="profile-page__items-list" data={myList} />
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="profile-page__logout-button"
            onClick={() => logout()}
          >
            <button className="button-std" onClick={logout}>
              Logout
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileView;
