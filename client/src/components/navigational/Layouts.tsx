import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import AuthComponent from "./Auth";
import AppLayout from "./AppNavigation";
import LoginScreen from "../../pages/LoginPage";
import { LoginContext, UserContext } from "../../helpers/Context";

const Layouts = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [currentUser, setCurrentUser] = useState({}); //User login information

  return (
    <LoginContext.Provider value={{ isAuthorised}}>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Switch>
          <Route path="/auth">
            <AuthComponent />
          </Route>
          <Route path="/app">
            <AppLayout />
          </Route>
          <Redirect from="/" to="/auth/login">
            <LoginScreen />
          </Redirect>
        </Switch>
      </UserContext.Provider>
    </LoginContext.Provider>
  );
};

export default Layouts;
