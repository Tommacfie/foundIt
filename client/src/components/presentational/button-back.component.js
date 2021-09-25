import { Link } from 'react-router-dom';

const ButtonBack = (props) => {
  return (
    <div className='button-back'>
      <Link to={`${props.link}`}>{props.text}</Link>
    </div>
  )
};
export default ButtonBack;