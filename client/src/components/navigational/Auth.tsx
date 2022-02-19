import { Route } from "react-router-dom";
import RegisterScreen from "../../pages/RegisterPage";
import LoginScreen from "../../pages/LoginPage";

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
