import ImageSmall from '../presentational/image-small.component';
import './item.component.css';
import { useHistory } from 'react-router-dom';

const Item = (props) => {
  const history = useHistory();
  const displayDetails = () => {
    console.log('click');
  }

  return (
    <div className={`item ${props.data.lostOrFound ? 'lost' : 'found'}`} onClick={() => displayDetails()}>
      <div className='item-image'>
        <ImageSmall image={props.image} />
      </div>
      <div className='item-text'>
        <h3>{props.data.title} - {props.data.location}</h3>
        <p>{props.data.description}</p>
      </div>
    </div>
  )
}
export default Item;