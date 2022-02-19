import { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from "../components/presentational/Logo";
import LoginFormComponent from "../components/form/LoginForm";
import { LoginContext } from "../helpers/Context";

const LoginScreen = () => {
  const { isAuthorised } = useContext(LoginContext);

  return (
    <>
      {!isAuthorised ? (
        <div className="login-page">
          <Logo />
          <LoginFormComponent />
          <p>Don't have an account?</p>
          <Link to="/auth/register">
            <p className="login-page__register-link">Register</p>
          </Link>
        </div>
      ) : (
        <Redirect to="/app/home" />
      )}
    </>
  );
};

export default LoginScreen;
