const ImageLarge = (props) => {
  return (
    <>
      {props.image === undefined ? (
        <h1>NO IMAGE TO DISPLAY</h1>
      ) : (
        <img className={props.class} src={`${props.image}`} alt="Item large" />
      )}
    </>
  );
};
export default ImageLarge;
