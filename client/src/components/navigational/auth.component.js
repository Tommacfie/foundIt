import { Route } from "react-router-dom";
import RegisterScreen from "../../pages/register.page";
import LoginScreen from "../../pages/login.page";

const AuthComponent = () => {
  return (
    <div className="auth-component">
      <Route path="/auth/login" exact>
        {" "}
        <LoginScreen />
      </Route>
      <Route path="/auth/register" exact>
        <RegisterScreen />
      </Route>
    </div>
  );
};

export default AuthComponent;
