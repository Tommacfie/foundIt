import { useState } from "react";
import ButtonStd from "../presentational/button-std.component";
import './item-submit.form.css';
import Api from '../../services/api.service';

const ItemSubmitForm = () => {
  const [userData, setUserData] = useState({ title: '', location: '', brand: '', description: '' });

  const handleInputChange = (event) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!userData.title || !userData.location || !userData.brand || !userData.description) {
    //   console.log('required');
    //   return
    // }
    // const log = await Api.postItem(userData);
    window.location.pathname = `${window.location.pathname}/details`;
  };

  //FIX ME - add validation to form fields
  return (
    <form className='lost-found-form'>
      <div className='form-group'>
        <input className='form-control' type='text' name='title' placeholder={'title'} onChange={(event) => handleInputChange(event)} />
      </div>
      <div className='form-group'>
        <input className='form-control' type='text' name='brand' placeholder={'brand or model'} onChange={(event) => handleInputChange(event)} />
      </div>
      <div className='form-group'>
        <input className='form-control' type='text' name='location' placeholder={'where did you lose/find the item?'} onChange={(event) => handleInputChange(event)} />
      </div>
      <div className='form-group'>
        <input className='form-control' type='text' name='description' placeholder={'description'} onChange={(event) => handleInputChange(event)} />
      </div>
      <div onClick={handleSubmit}>
        <ButtonStd text={'Next'} data={userData} />
      </div>
    </form>
  )
}

export default ItemSubmitForm;