import React, { useState, useContext } from "react";
import { LoginContext, UserContext } from "../../helpers.js/context";
import Api from "../../services/api.service";

const RegisterForm = () => {
  const [userInput, setuserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { setIsAuthorised } = useContext(LoginContext);
  const { setCurrentUser } = useContext(UserContext);

  const handleInputChange = (event) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = userInput;
    if (!firstName || !lastName || !email || !password)
      return alert("Please complete all fields");

    const registerResponse = await Api.register(userInput);
    if (!registerResponse.firstName) return alert(registerResponse.message);

    const newUser = await Api.login(userInput);
    setCurrentUser(newUser);
    setIsAuthorised(true);
  };

  return (
    <form className="register-form">
      <div className="register-form__form-group">
        <input
          className="register-form__input"
          type="text"
          name="firstName"
          placeholder={"first name"}
          autoComplete="on"
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="register-form__form-group">
        <input
          className="register-form__input"
          type="text"
          name="lastName"
          placeholder={"last name"}
          autoComplete="on"
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="register-form__form-group">
        <input
          className="register-form__input"
          type="email"
          name="email"
          placeholder={"email"}
          autoComplete="on"
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="register-form__form-group">
        <input
          className="register-form__input"
          type="password"
          name="password"
          placeholder={"password"}
          autoComplete="on"
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <button className="button-std" onClick={handleSubmit}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
