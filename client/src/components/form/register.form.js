import React from 'react';
import { useState, useContext } from 'react';
import { LoginContext, UserContext } from '../../helpers.js/context';
import { useHistory } from 'react-router';
import ButtonStd from '../presentational/button-std.component';

import Api from '../../services/api.service';
import './register.form.css';

const RegisterForm = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleInputChange = (event) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
      //FIX ME - add validation
      return
    }
    const registered = await Api.register(userData);
    console.log(registered);
    setCurrentUser(registered);
    setIsAuthorised(true);
  };

  //FIX ME - add validation to form fields
  return (
    <form className='register-form'>
      <div className='form-group'>
        {/* <label>first name</label> */}
        <input className='form-control' type='text' name='firstName' placeholder={'first name'} onChange={(event) => handleInputChange(event)} />
      </div>
      <div className='form-group'>
        {/* <label>last name</label> */}
        <input className='form-control' type='text' name='lastName' placeholder={'last name'} onChange={(event) => handleInputChange(event)} />
      </div>
      <div className='form-group'>
        {/* <label>email</label> */}
        <input className='form-control' type='email' name='email' placeholder={'email'} onChange={(event) => handleInputChange(event)} />
      </div>
      <div className='form-group'>
        {/* <label>password</label> */}
        <input className='form-control' type='password' name='password' placeholder={'password'} onChange={(event) => handleInputChange(event)} />
      </div>
      <div onClick={handleSubmit}>
        <ButtonStd text={'Register'} />
      </div>
    </form>
  )
}

export default RegisterForm;