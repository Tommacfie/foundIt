import React from "react";
import Logo from '../components/presentational/logo.component';
import LoginFormComponent from '../components/form/login.form';
import RegisterScreen from "./register.screen";
import ButtonLarge from '../components/presentational/button-large.component';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './login.screen.css';

const LoginScreen = (props) => {

  return (
    <div className='login-container'>
      <Logo />
      <LoginFormComponent />
      <ButtonLarge text={'Login'} link={'/home'} />
      <Link to='./register'>Register</Link>
    </div>
  )
};

export default LoginScreen;