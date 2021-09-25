import ButtonStd from "../presentational/button-std.component";
import ImageLarge from "../presentational/image-lrg.component";
import './item-details-display.component.css';

const ItemDetailsDisplay = (props) => {
  return (
    <div className='item-details-display'>
      <ImageLarge image={`${props.image}`} />
      <h1>{props.data.title},</h1>
      <h1>{props.data.brandModel}</h1>
      <h3>{props.data.location}</h3>
      <p>{props.data.description}</p>
    </div>
  )
}
export default ItemDetailsDisplay;