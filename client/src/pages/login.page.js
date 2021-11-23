import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from "../components/presentational/logo.component";
import LoginFormComponent from "../components/form/login.form";
import { LoginContext } from "../helpers.js/context";

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
