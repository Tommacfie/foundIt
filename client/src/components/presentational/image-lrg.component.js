const ImageLarge = (props) => {
  return (
    <div className="image-large">
      {props.image === undefined ? (
        <h1>NO IMAGE TO DISPLAY</h1>
      ) : (
        <>
          <img
            className="image-large__image"
            src={`${props.image}`}
            alt="Item large"
          />
        </>
      )}
    </div>
  );
};
export default ImageLarge;
