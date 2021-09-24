import { Link } from 'react-router-dom';

const ButtonLarge = (props) => {

  return (
    <div>
      <Link to={`${props.link}`}>{props.text}</Link>

    </div>
  )
}

export default ButtonLarge;