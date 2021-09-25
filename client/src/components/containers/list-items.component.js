import Item from '../containers/item.component';

const ItemsList = (props) => {
  return (
    <div>
      {
        props.data.map(item => {
          return <Item data={item} key={item._id} />
        })
      }
    </div>
  )
}
export default ItemsList;