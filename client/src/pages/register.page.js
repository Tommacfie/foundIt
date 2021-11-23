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
          <p>Already have an account?</p>
          <Link to="/auth/login" className="register-page__login-link">
            Back to Login
          </Link>
        </div>
      )}
    </>
  );
};

export default RegisterScreen;
