import example from '../../assets/default-img.png';
import './image-small.component.css';

const ImageSmall = (props) => {
  return (
    <div className='image-small-container'>
      {props.image === 'No image provided'
        ? <img className='image-small' src={example} alt=''></img>
        : <img className='image-small' src={`${props.image}`} />
      }
    </div>
  )
};
export default ImageSmall;