import React from 'react';
import { Redirect } from 'react-router-dom';
import ItemSubmitForm from '../components/form/item-submit.form.js';
import './create.item.screen.css';
import { useContext } from 'react';
import { LoginContext } from '../helpers.js/context.js';

const CreateItem = (props) => {
  const { isAuthorised, setIsAuthorised } = useContext(LoginContext);
  console.log(isAuthorised, 'create');
  return (
    <div>
      {!isAuthorised
        ? <Redirect to='/auth/login' />
        : <ItemSubmitForm />
      }
    </div>
  )
}

export default CreateItem;