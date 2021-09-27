import { Link } from 'react-router-dom';
import './button-large.component.css';

const ButtonLarge = (props) => {
  return (
    <div className='button-lrg'>
      <Link to={`${props.link}`}>{props.text}</Link>
    </div>
  )
};
export default ButtonLarge;