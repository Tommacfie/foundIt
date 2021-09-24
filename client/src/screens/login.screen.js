import React from "react";
import Logo from '../components/presentational/logo.component';
import LoginFormComponent from '../components/form/login.form';
import ButtonLarge from '../components/presentational/button-large.component';
import './login.screen.css';

const LoginScreen = () => {
  return (
    <div className='login-container'>
      <Logo />
      <LoginFormComponent />
      <ButtonLarge text={'Login'} />
      <h6>Register</h6>
    </div>
  )
};

export default LoginScreen;