import './image.form.css';
import { ItemContext } from '../../helpers.js/context';
import { useContext, useState } from 'react';
import Axios from 'axios';
import ImageLarge from '../presentational/image-lrg.component';
import { useHistory } from 'react-router-dom';
import ButtonStd from '../presentational/button-std.component';

const ImageForm = () => {

  const history = useHistory();

  const { itemData, setItemData } = useContext(ItemContext);
  const [image, setImage] = useState({})
  // const [imageData, setImageData] = useState({});

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'foundit')
    const imageResponse = await Axios.post('https://api.cloudinary.com/v1_1/diuadqc2m/image/upload', formData)
    setItemData({ ...itemData, ...imageResponse });
    history.push(`/app/create/${itemData.lostOrFound ? 'lost' : 'found'}/detail`);
  }

  return (
    <div className='image-form'>
      <h1>IMAGEFORM</h1>
      {Object.keys(image).length
        ? <ImageLarge image={itemData} />
        : <h1>no image</h1>
      }
      <input
        type='file'
        accept='image/*'
        capture='environment'
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      />
      <div onClick={() => handleSubmit()}>
        <ButtonStd text={'Submit'} />
      </div>
    </div>
  )
}

export default ImageForm;