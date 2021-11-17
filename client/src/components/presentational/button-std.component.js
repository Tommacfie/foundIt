import "../../scss/button-std.component.scss";

const ButtonStd = (props) => {
  return (
    <div className="button-std">
      <h3>{props.text}</h3>
    </div>
  );
};
export default ButtonStd;
