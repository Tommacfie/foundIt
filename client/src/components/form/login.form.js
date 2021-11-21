import React, { useState, useContext } from "react";
import Api from "../../services/api.service";
import { LoginContext, UserContext } from "../../helpers.js/context";

const LoginForm = () => {
  const emptyInput = { email: "", password: "" };
  const [userInput, setUserInput] = useState(emptyInput);
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
    const { email, password } = userInput;
    if (!email || !password) return alert("Please complete all fields");

    const loggedIn = await Api.login(userInput);
    if (loggedIn.email) {
      setCurrentUser(loggedIn);
      setIsAuthorised(true);
      return;
    }
    setUserInput(emptyInput);
    console.log("here", event.target);
    return alert(loggedIn.message);
  };

  return (
    <>
      <form className="login-form">
        <div className="login-form__form-group">
          <input
            className="login-form__input"
            type="text"
            name="email"
            onChange={(event) => handleInputChange(event)}
            placeholder="email address"
            autoComplete="email"
          />
        </div>
        <div className="login-form__form-group">
          <input
            className="login-form__input"
            type="password"
            name="password"
            onChange={(event) => handleInputChange(event)}
            placeholder="password"
            autoComplete="current-password"
          />
        </div>
        <button className="button-std" text={"Login"} onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
