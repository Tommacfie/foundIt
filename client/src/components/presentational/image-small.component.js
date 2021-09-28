import example from './ex-image.png';
import './image-small.component.css';

const ImageSmall = (props) => {
  return (
    <div >
      {props.image === 'No image provided'
        ? <img className='image-small' src={example} alt=''></img>
        : <img className='image-small' src={`${props.image}`} />
      }
    </div>
  )
};
export default ImageSmall;