const ImageLarge = (props) => {

  return (
    <div className='image-large'>
      <img src={`${props.image}`} />
    </div>
  )
};
export default ImageLarge;