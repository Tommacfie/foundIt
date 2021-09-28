import React from "react";
import RegisterFormComponent from '../components/form/register.form';
import { Redirect, Link } from 'react-router-dom';
import './register.screen.css';
import { useContext } from "react";
import { LoginContext } from "../helpers.js/context";

const RegisterScreen = (props) => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);

  return (
    <div>
      {isAuthorised
        ? <Redirect to='/app/home' />
        : <div className='register-container'>
          <RegisterFormComponent />
          <Link to='/auth/login'>Back to Login</Link>
        </div>
      }
    </div>
  )
};

export default RegisterScreen;