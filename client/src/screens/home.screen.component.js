import React from "react";
import { useContext } from "react";
import ItemsList from "../components/containers/list-items.component";
import { Redirect } from "react-router-dom";
import './home.screen.component.css';
import { LoginContext } from "../helpers.js/context";

const HomeScreen = (props) => {

  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  console.log(isAuthorised, 'home');
  return (
    <div>
      {
        !isAuthorised
          ? <Redirect to='/auth/login' />
          :
          <div className='home-screen'>
            <h3 className='home-header'>Home</h3>
            <ItemsList data={props.data} />
          </div>
      }
    </div>
  )
};

export default HomeScreen;