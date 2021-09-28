import './image.form.css';
import { ItemContext } from '../../helpers.js/context';
import { useContext, useState } from 'react';
import Axios from 'axios';

const ImageForm = () => {

  const { itemData, setItemData } = useContext(ItemContext);
  const [imageData, setImageData] = useState({});
  //Api image req

  const handleSubmit = async () => {
    console.log(imageData);
    const formData = new FormData()
    formData.append('file', imageData)
    formData.append('upload_preset', 'foundit')

    Axios.post('https://api.cloudinary.com/v1_1/diuadqc2m/image/upload', formData)
      .then(response => console.log(response));
  }

  return (
    <div>
      <h1>IMAGEFORM</h1>
      <input
        type='file'
        onChange={(event) => {
          setImageData(event.target.files[0]);
        }}
      />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}

export default ImageForm;