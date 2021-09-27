import React from 'react';
import { Redirect } from 'react-router-dom';
import LostAndFoundForm from '../components/form/item-submit.form.js';
import './create.item.screen.css';

const CreateItem = (props) => {
  const isAuthenticated = props.auth;
  return (
    <div>
      {!isAuthenticated
        ? <Redirect to='/login' />
        : <LostAndFoundForm />
      }
    </div>
  )
}

export default CreateItem;