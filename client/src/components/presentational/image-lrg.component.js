import example from './ex-image.png';
import './image-large.component.css';
import { Image } from 'cloudinary-react';

const ImageLarge = (props) => {
  console.log(props.image, 'call imglarge');
  return (
    <div>
      {!props.image
        ? <h2>NO IMAGE TO DISPLAY</h2>
        : <div className='image-large-container'>
          <h1>IMAGE ZONE</h1>
          <img className='image-large' src={`${props.image.data.url}`} alt='No image to display' />
        </div>
      }
    </div>
  )
};
export default ImageLarge;