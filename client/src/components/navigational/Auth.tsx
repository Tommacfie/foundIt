import { Route } from "react-router-dom";
import RegisterScreen from "../../pages/register.page";
import LoginScreen from "../../pages/login.page";

const AuthComponent = () => {
  return (
    <>
      <Route path="/auth/login" exact>
        {" "}
        <LoginScreen />
      </Route>
      <Route path="/auth/register" exact>
        <RegisterScreen />
      </Route>
    </>
  );
};

export default AuthComponent;
