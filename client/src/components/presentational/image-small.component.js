const ImageSmall = (props) => {

  return (
    <div className='image-small'>
      <img src={`${props.image}`} />
    </div>
  )
};
export default ImageSmall;