import { Link } from 'react-router-dom';
import './button-std.component.css';

const ButtonStd = (props) => {
  return (
    <div className='button-std'>
      {/* <Link to={`${props.link}`}>{props.text}</Link> */}
      <h3>{props.text}</h3>
    </div>
  )
};
export default ButtonStd;