import React from "react";
import RegisterFormComponent from '../components/form/register.form';
import { Redirect } from 'react-router-dom';
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
        </div>
      }
    </div>
  )
};

export default RegisterScreen;