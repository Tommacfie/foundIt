import './option.component.css';
import ButtonLarge from './button-large.component';
import { useContext } from 'react';
import { ItemContext } from '../../helpers.js/context';

const OptionComponent = (props) => {

  const { setItemData } = useContext(ItemContext);

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
      <div style={{ 'display': 'flex', "flexDirection": 'column', 'alignItems': 'center' }} onClick={() => setLostOrFound(true)}>
        <ButtonLarge text={props.topButtonText} link={props.topButtonLink} />
      </div>
      <div style={{ 'display': 'flex', "flexDirection": 'column', 'alignItems': 'center' }} onClick={() => setLostOrFound(false)}>
        <ButtonLarge text={props.bottomButtonText} link={props.bottomButtonLink} />
      </div>
    </div>
  )
}

export default OptionComponent;