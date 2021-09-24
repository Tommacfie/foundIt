import React from "react";
import RegisterFormComponent from '../components/form/register.form';
import ButtonLarge from '../components/presentational/button-large.component';
import './register.screen.css';

const RegisterScreen = () => {
  return (
    <div className='register-container'>
      <RegisterFormComponent />
      <ButtonLarge text={'Register'} />
    </div>
  )
};

export default RegisterScreen;