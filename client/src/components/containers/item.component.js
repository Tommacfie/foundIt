import ImageSmall from '../presentational/image-small.component';
import './item.component.css';

const Item = (props) => {
  return (
    <div className='item'>
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