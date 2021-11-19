import React, { useState, useContext } from "react";
import Api from "../../services/api.service";
import { LoginContext, UserContext } from "../../helpers.js/context";
import ButtonStd from "../presentational/button-std.component";
import "../../scss/components/login.form.scss";

const LoginForm = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const { setIsAuthorised } = useContext(LoginContext);
  const { setCurrentUser } = useContext(UserContext);

  const handleInputChange = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loggedIn = await Api.login(userInput);
    if (loggedIn) {
      setCurrentUser(loggedIn);
      setIsAuthorised(true);
    }
  };

  //FIX ME - add validation to form fields
  return (
    <>
      <form className="login-form" autoComplete="off">
        <div className="login-form__form-group">
          <input
            className="login-form__input"
            type="text"
            name="email"
            onChange={(event) => handleInputChange(event)}
            placeholder="email address"
          />
        </div>
        <div className="login-form__form-group">
          <input
            className="login-form__input"
            type="password"
            name="password"
            onChange={(event) => handleInputChange(event)}
            placeholder="password"
          />
        </div>
        <div
          style={{ marginBottom: "10px" }}
          className="login-button"
          onClick={handleSubmit}
        >
          <ButtonStd text={"Login"} />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
