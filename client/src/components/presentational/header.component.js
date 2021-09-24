import React from 'react';
import Logo from './logo.component';
import './header.component.css';

const Header = () => {

  return (
    <div className='header-container'>
      <h3 className='header-back-btn'> B </h3>
      <Logo />
    </div>
  )
};

export default Header