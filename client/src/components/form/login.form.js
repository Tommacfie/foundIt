import React from 'react';
import { useEffect, useState } from 'react';
import Api from '../../services/api.service';

const LoginForm = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });

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
    const log = await Api.login(userData);
    localStorage.setItem('isAuthenticated', 'true');
    window.location.pathname = '/home';
  };


  return (
    <div className='login-form'>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className='form-group'>
          <label>email</label>
          <input className='form-control' type='text' name='email' onChange={(event) => handleInputChange(event)} />
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

export default LoginForm;