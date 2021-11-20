import { Redirect, Link } from "react-router-dom";
import React, { useContext } from "react";

import RegisterFormComponent from "../components/form/register.form";
import { LoginContext } from "../helpers.js/context";

const RegisterScreen = () => {
  const { isAuthorised } = useContext(LoginContext);

  return (
    <>
      {isAuthorised ? (
        <Redirect to="/app/home" />
      ) : (
        <div className="register-page">
          <h1 className="register-page__header">Register</h1>
          <RegisterFormComponent />
          <Link to="/auth/login">Back to Login</Link>
        </div>
      )}
    </>
  );
};

export default RegisterScreen;
