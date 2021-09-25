import example from './ex-image.png';
import './image-large.component.css';
const ImageLarge = (props) => {

  return (
    <div className='image-large-container'>
      <img className='image-large' src={example} alt=''></img>
      {/* <img src={`${props.image}`} /> */}
    </div>
  )
};
export default ImageLarge;