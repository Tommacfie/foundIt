const ButtonStd = (props) => {
  return (
    <button className="button-std" onClick={() => props.onClick()}>
      {props.text}
    </button>
  );
};
export default ButtonStd;
