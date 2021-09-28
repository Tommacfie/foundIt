import React from "react";
import Logo from '../components/presentational/logo.component';
import LoginFormComponent from '../components/form/login.form';
import { Link, Redirect } from "react-router-dom";
import { LoginContext } from "../helpers.js/context";
import { useContext } from "react";
import './login.screen.css';

const LoginScreen = () => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);

  return (
    <div>
      {!isAuthorised
        ? <div className='login-container'>
          <Logo />
          <LoginFormComponent />
          <Link to='/auth/register'>Register</Link>
        </div>
        :
        <Redirect to='/app/home' />
      }
    </div>
  )
};

export default LoginScreen;