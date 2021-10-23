import example from '../../assets/default-img.png';
import './image-small.component.css';

const ImageSmall = (props) => {
  return (
    <div className='image-small-container'>
      {props.image === 'No image provided'
        ? <img className='image-small' src={example} alt='item thumbnail'></img>
        : <img className='image-small' src={`${props.image}`} alt='item thumnail' />
      }
    </div>
  )
};
export default ImageSmall;