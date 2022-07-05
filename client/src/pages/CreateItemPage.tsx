import  { useContext } from "react";
import { Redirect } from "react-router-dom";
import ItemSubmitForm from "../components/form/ItemSubmitForm";
import { LoginContext } from "../helpers/Context";

const CreateItem = () => {
  const { isAuthorised } = useContext(LoginContext);
  return (
    <>{!isAuthorised ? <Redirect to="/auth/login" /> : <ItemSubmitForm />}</>
  );
};

export default CreateItem;
