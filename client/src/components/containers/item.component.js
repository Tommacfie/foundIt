import ImageSmall from '../presentational/image-small.component';

const Item = (props) => {
  return (
    <div className='item'>
      <h1>ITEM</h1>
      <div className='item-image'>
        <ImageSmall image={props.image} />
      </div>
      <div className='item-text'>
        <h1>{props.title} {props.location}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
export default Item;