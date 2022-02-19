import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import AuthComponent from "./auth";
import AppLayout from "./AppNavigation";
import LoginScreen from "../../pages/loginpage";
import { LoginContext, UserContext } from "../../helpers/context";

const Layouts = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [currentUser, setCurrentUser] = useState({}); //User login information

  return (
    <LoginContext.Provider value={{ isAuthorised, setIsAuthorised }}>
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
