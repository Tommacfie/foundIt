import './image-large.component.css';
import { Image } from 'cloudinary-react';

const ImageLarge = (props) => {
  return (
    <div>
      {!Object.keys(props.image).length
        ? <h2>NO IMAGE TO DISPLAY</h2>
        : <div className='image-large-container'>
          <img className='image-large' src={`${props.image.data.url}`} alt='No image to display' />
        </div>
      }
    </div>
  )
};
export default ImageLarge;