import OptionComponent from "../components/presentational/option.component";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../helpers.js/context";
import "../scss/components/action.component.scss";

const ActionScreen = (props) => {
  const { isAuthorised } = useContext(LoginContext);

  return (
    <div className='option-component'>
      {!isAuthorised ? (
        <Redirect to="/auth/login" />
      ) : (
        <OptionComponent
          title={props.title}
          topButtonText={props.topButtonText}
          bottomButtonText={props.bottomButtonText}
          topButtonLink={props.topButtonLink}
          bottomButtonLink={props.bottomButtonLink}
        />
      )}
    </div>
  );
};

export default ActionScreen;
