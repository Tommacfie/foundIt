import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import ItemSubmitForm from "../components/form/item-submit.form";
import { LoginContext } from "../helpers/context";

const CreateItem = () => {
  const { isAuthorised } = useContext(LoginContext);
  return (
    <>{!isAuthorised ? <Redirect to="/auth/login" /> : <ItemSubmitForm />}</>
  );
};

export default CreateItem;
