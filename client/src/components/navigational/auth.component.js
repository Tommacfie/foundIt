import { Route } from "react-router-dom";
import RegisterScreen from "../../screens/register.screen";
import LoginScreen from "../../screens/login.screen";
import "../../scss/auth.component.scss";

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
