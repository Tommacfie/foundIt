import React from 'react';
import { useState } from 'react';
import Api from '../../services/api.service';
import { LoginContext, UserContext } from '../../helpers.js/context';
import { useContext } from 'react';
import ButtonStd from '../presentational/button-std.component';

const LoginForm = () => {
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleInputChange = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    })
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
    <div className='login-form'>
      <form>
        <div className='form-group'>
          <label>email</label>
          <input className='form-control' type='text' name='email' onChange={(event) => handleInputChange(event)} />
        </div>
        <div className='form-group'>
          <label>password</label>
          <input className='form-control' type='password' name='password' onChange={(event) => handleInputChange(event)} />
        </div>
        <div onClick={handleSubmit}>
          <ButtonStd text={'Login'} />
        </div>
      </form>
    </div>
  )
}

export default LoginForm;