import React from 'react';
import { Link } from 'react-router-dom';
import './nav.component.css';

const NavBar = () => {

  return (
    <div className='navBar-container'>
      <div className='button home-button-container'>
        <Link to='/home'>H</Link>
      </div>
      <div className='button add-button-container'>
        <Link to='/create'>H</Link>
      </div>
      <div className='button profile-button-container'>
        <Link to='/profile'>H</Link>
      </div>
    </div>
  )
}

export default NavBar;