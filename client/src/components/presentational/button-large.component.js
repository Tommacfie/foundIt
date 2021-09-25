import { Link } from 'react-router-dom';

const ButtonLarge = (props) => {
  return (
    <div className='button-lrg'>
      <Link to={`${props.link}`}>{props.text}</Link>
    </div>
  )
};
export default ButtonLarge;