import { Redirect } from "react-router-dom";
import { useContext } from "react";

import ItemsList from "../components/containers/list-items.component";
import ButtonStd from "../components/presentational/button-std.component";
import "../scss/pages/profile.page.scss";
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
    <div>
      {!isAuthorised ? (
        <Redirect to="/auth/login" />
      ) : (
        <div>
          {!myList.length ? (
            <h2>No items to display</h2>
          ) : (
            <div className="profile-screen">
              <h3 className="profile-header">Your Items</h3>
              <ItemsList className="items-list" data={myList} />
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="logout-button"
            onClick={() => logout()}
          >
            <ButtonStd text={"Logout"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileView;
