import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import ItemSubmitForm from "../components/form/item-submit.form";
import { LoginContext } from "../helpers.js/context";
import "../scss/create.item.screen.scss";

const CreateItem = () => {
  const { isAuthorised } = useContext(LoginContext);
  return (
    <div>
      {!isAuthorised ? <Redirect to="/auth/login" /> : <ItemSubmitForm />}
    </div>
  );
};

export default CreateItem;
