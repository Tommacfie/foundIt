import { useState, useContext } from "react";
import  {login} from "../../services/ApiService";
import { LoginContext, UserContext } from "../../helpers/Context";

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

    const loggedIn = await login(userInput);
    if (loggedIn.email) {
      setCurrentUser(loggedIn);
      setIsAuthorised(true);
      return;
    }
    setUserInput(emptyInput);
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
            value={`${userInput.email}`}
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
            value={`${userInput.password}`}
            onChange={(event) => handleInputChange(event)}
            placeholder="password"
            autoComplete="current-password"
          />
        </div>
        <button
          className="button-std-dark"
          text={"Login"}
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
