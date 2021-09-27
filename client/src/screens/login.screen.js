import React from "react";
import Logo from '../components/presentational/logo.component';
import LoginFormComponent from '../components/form/login.form';
import ButtonLarge from '../components/presentational/button-large.component';
import { Link, Redirect } from "react-router-dom";
import './login.screen.css';

const LoginScreen = (props) => {
  const isAuthenticated = props.auth;

  return (<div>
    {!isAuthenticated
      ? <div className='login-container'>
        <Logo />
        <LoginFormComponent />
        <ButtonLarge text={'Login'} link={'/app/home'} />
        <Link to='/auth/register'>Register</Link>
      </div>
      :
      <Redirect to='/app/home' />
    }
  </div>
  )
};

export default LoginScreen;