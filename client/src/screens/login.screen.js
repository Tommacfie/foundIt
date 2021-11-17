import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from "../components/presentational/logo.component";
import LoginFormComponent from "../components/form/login.form";
import { LoginContext } from "../helpers.js/context";
import "../scss/login.screen.scss";

const LoginScreen = () => {
  const { isAuthorised } = useContext(LoginContext);

  return (
    <div>
      {!isAuthorised ? (
        <div className="login-container">
          <Logo />
          <LoginFormComponent />
          <Link to="/auth/register">Register</Link>
        </div>
      ) : (
        <Redirect to="/app/home" />
      )}
    </div>
  );
};

export default LoginScreen;
