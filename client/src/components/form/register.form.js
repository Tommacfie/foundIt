import React, { useState, useContext } from "react";
import { LoginContext, UserContext } from "../../helpers.js/context";
import ButtonStd from "../presentational/button-std.component";

import Api from "../../services/api.service";
import "../../scss/components/register.form.scss";

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { setIsAuthorised } = useContext(LoginContext);
  const { setCurrentUser } = useContext(UserContext);

  const handleInputChange = (event) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.email ||
      !userData.password
    ) {
      //FIX ME - add validation
      return;
    }
    await Api.register(userData);
    const newUser = await Api.login(userData);
    setCurrentUser(newUser);
    setIsAuthorised(true);
  };

  return (
    <form className="register-form" autoComplete="off">
      <div className="register-form__form-group">
        <input
          className="register-form__input"
          type="text"
          name="firstName"
          placeholder={"first name"}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="register-form__form-group" autoComplete="off">
        <input
          className="register-form__input"
          type="text"
          name="lastName"
          placeholder={"last name"}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="register-form__form-group" autoComplete="off">
        <input
          className="register-form__input"
          type="email"
          name="email"
          placeholder={"email"}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="register-form__form-group" autoComplete="off">
        <input
          className="register-form__input"
          type="password"
          name="password"
          placeholder={"password"}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div style={{ marginBottom: "10px" }} onClick={handleSubmit}>
        <ButtonStd text={"Register"} />
      </div>
    </form>
  );
};

export default RegisterForm;
