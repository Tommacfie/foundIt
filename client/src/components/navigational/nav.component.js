import React from 'react';
import './nav.component.css';

const NavBar = () => {

  return (
    <div className='navBar-container'>
      <div className='button home-button-container'></div>
      <div className='button add-button-container'></div>
      <div className='button profile-button-container'></div>
    </div>
  )
}

export default NavBar;