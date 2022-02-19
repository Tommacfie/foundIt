import { useContext } from "react";
import { LoginContext } from "../../helpers/Context";
import { ItemContext } from "../../helpers/Context";
import { Redirect, Link } from "react-router-dom";

const OptionComponent = (props: {
  title: string;
  topButtonText: string;
  topButtonLink: string;
  bottomButtonText: string;
  bottomButtonLink: string;
  setItemData: () => void
}) => {
  const { isAuthorised } = useContext(LoginContext);
  const { setItemData } = useContext(ItemContext);

  const setLostOrFound = (arg) => {
    if (arg) {
      setItemData({ lostOrFound: true });
    } else {
      setItemData({ lostOrFound: false });
    }
  };
  return (
    <div className="option-component">
      {!isAuthorised ? (
        <Redirect to="/auth/login" />
      ) : (
        <>
          <h1 className="option-component__header">{props.title}</h1>
          <Link to={`${props.topButtonLink}`}>
            <button className="button-lrg" onClick={() => setLostOrFound(true)}>
              {props.topButtonText}
            </button>
          </Link>
          <Link to={`${props.bottomButtonLink}`}>
            <button
              className="button-lrg"
              onClick={() => setLostOrFound(false)}
            >
              {props.bottomButtonText}
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default OptionComponent;
