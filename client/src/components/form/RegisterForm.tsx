import { useState, useContext } from "react";
import { LoginContext, UserContext } from "../../helpers/Context";
import * as Api from "../../services/ApiService";

const RegisterForm = () => {
  const emptyUser = { firstName: "", lastName: "", email: "", password: "" };

  const [userInput, setUserInput] = useState(emptyUser);
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
    const { firstName, lastName, email, password } = userInput;
    if (!firstName || !lastName || !email || !password)
      return alert("Please complete all fields");

    const registerResponse = await Api.register(userInput);
    if (!registerResponse.firstName) {
      alert(registerResponse.message);
      return setUserInput((prevState) => {
        return {
          ...prevState,
          email: "",
          password: "",
        };
      });
    }
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
          value={`${userInput.firstName}`}
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
          value={`${userInput.lastName}`}
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
          value={`${userInput.email}`}
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
          value={`${userInput.password}`}
          autoComplete="on"
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <button className="button-std-dark" onClick={handleSubmit}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
