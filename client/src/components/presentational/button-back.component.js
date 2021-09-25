import { Link } from 'react-router-dom';
import back from '../../assets/back';

const ButtonBack = (props) => {
  return (
    <div className='button-back'>
      <Link to={`${props.link}`}>
        <img src={back} />
      </Link>
    </div>
  )
};
export default ButtonBack;