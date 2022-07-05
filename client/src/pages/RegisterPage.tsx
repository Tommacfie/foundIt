import { Redirect, Link } from "react-router-dom";
import { useContext } from "react";

import RegisterFormComponent from "../components/form/RegisterForm";
import { LoginContext } from "../helpers/Context";

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
          <Link to="/auth/login">
            <p className="register-page__login-link">Back to Login</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default RegisterScreen;
