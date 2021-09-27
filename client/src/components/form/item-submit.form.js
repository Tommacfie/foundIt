import { useState, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import ButtonStd from "../presentational/button-std.component";
import './item-submit.form.css';
import { ItemContext } from "../../helpers.js/context";

const ItemSubmitForm = () => {
  const [userData, setUserData] = useState({ title: '', location: '', brand: '', description: '' });
  const { itemData, setItemData } = useContext(ItemContext);

  const history = useHistory();

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
    if (!userData.title || !userData.location || !userData.brand || !userData.description) {
      console.log('no empty fields!');
      return
    }

    setItemData({ ...itemData, ...userData })

    history.push(`/app/create/${itemData.lostOrFound ? 'lost' : 'found'}/detail`)
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