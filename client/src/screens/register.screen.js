import React from "react";
import RegisterFormComponent from '../components/form/register.form';
import { Redirect } from 'react-router-dom';
import './register.screen.css';

const RegisterScreen = (props) => {
  const isAuthenticated = props.auth;
  console.log(props.auth);
  return (
    <div>
      {isAuthenticated
        ? <Redirect to='/app/home' />
        : <div className='register-container'>
          <RegisterFormComponent />
        </div>
      }
    </div>
  )
};

export default RegisterScreen;