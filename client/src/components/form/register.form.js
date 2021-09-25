import React from 'react';
import { useEffect, useState } from 'react';
import Api from '../../services/api.service';

const RegisterForm = () => {
  const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '', password: '' });

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
    const log = await Api.register(userData);
    localStorage.setItem('isAuthenticated', 'true');
    window.location.pathname = '/home';
  };

  //FIX ME - add validation to form fields
  return (
    <div className='register-form'>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className='form-group'>
          <label>first name</label>
          <input className='form-control' type='text' name='firstName' onChange={(event) => handleInputChange(event)} />
        </div>
        <div className='form-group'>
          <label>last name</label>
          <input className='form-control' type='text' name='lastName' onChange={(event) => handleInputChange(event)} />
        </div>
        <div className='form-group'>
          <label>email</label>
          <input className='form-control' type='email' name='email' onChange={(event) => handleInputChange(event)} />
        </div>
        <div className='form-group'>
          <label>password</label>
          <input className='form-control' type='password' name='password' onChange={(event) => handleInputChange(event)} />
        </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default RegisterForm;