const ImageLarge = (props) => {
  return (
    <div className='image-large'>
      {props.image === undefined ? (
        <h2>NO IMAGE TO DISPLAY</h2>
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
