import example from './ex-image.png';
import './image-small.component.css';
const ImageSmall = (props) => {

  return (
    <div className='image-small'>
      <img className='image-small' src={example}></img>
      {/* <img src={`${props.image}`} /> */}
    </div>
  )
};
export default ImageSmall;