import React from 'react';
import { Redirect } from 'react-router-dom';

const CreateItem = (props) => {
  const isAuthenticated = props.auth;

  return (
    <div>
      {!isAuthenticated
        ? <Redirect to='login' />
        : <h1>Authorised</h1>
      }
    </div>
  )
}

export default CreateItem;