import './option.component.css';
import ButtonLarge from './button-large.component';
import { useContext } from 'react';
import { ItemContext } from '../../helpers.js/context';

const OptionComponent = (props) => {

  const { itemData, setItemData } = useContext(ItemContext);

  const setLostOrFound = (arg) => {
    if (arg) {
      setItemData({ lostOrFound: true })
    } else {
      setItemData({ lostOrFound: false })
    }
  }
  return (
    <div className='option-component'>
      <h2>{props.title}</h2>
      <div onClick={() => setLostOrFound(true)}>
        <ButtonLarge text={props.lost} link={props.lostLink} />
      </div>
      <div onClick={() => setLostOrFound(false)}>
        <ButtonLarge text={props.found} link={props.foundLink} />
      </div>
    </div>
  )
}

export default OptionComponent;