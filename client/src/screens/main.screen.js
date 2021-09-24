import React from "react";
import Header from '../components/presentational/header.component';
import NavBar from '../components/navigational/nav.component';
import './main.screen.css';

const MainScreen = () => {


  return (
    <div className='home-container'>
      <Header />

      <NavBar />
    </div>
  )
};

export default MainScreen;