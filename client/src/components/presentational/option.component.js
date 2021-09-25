import './option.component.css';
import ButtonLarge from './button-large.component';

const OptionComponent = (props) => {
  return (
    <div className='option-component'>
      <h2>{props.title}</h2>
      <ButtonLarge text={props.lost} link={'/create'} />
      <ButtonLarge text={props.found} link={'/create'} />
    </div>
  )
}

export default OptionComponent;