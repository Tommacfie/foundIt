import ButtonStd from "../presentational/button-std.component";
import ImageLarge from "../presentational/image-lrg.component";

const ItemDetailsDisplay = (props) => {

  return (
    <div className='item-details-display'>
      <ImageLarge image={`${props.image}`} />
      <h1>{props.title}</h1>
      <h1>{props.location}</h1>
      <h1>{props.brand}</h1>
      <h1>{props.description}</h1>
    </div>
  )
}
export default ItemDetailsDisplay;