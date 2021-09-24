import React from "react";
import Header from '../components/presentational/header.component';
import RegisterFormComponent from '../components/form/register.form';
import ButtonLarge from '../components/presentational/button-large.component';
import './register.screen.css';

const RegisterScreen = () => {
  return (
    <div className='register-container'>
      <div className='header'>
        <Header />
      </div>
      <div className="register-container-form">
        <RegisterFormComponent />
        <ButtonLarge text={'Register'} />
      </div>
    </div>
  )
};

export default RegisterScreen;