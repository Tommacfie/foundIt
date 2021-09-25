import { Link } from 'react-router-dom';

const ButtonStd = (props) => {
  return (
    <div className='button-std'>
      <Link to={`${props.link}`}>{props.text}</Link>
    </div>
  )
};
export default ButtonStd;