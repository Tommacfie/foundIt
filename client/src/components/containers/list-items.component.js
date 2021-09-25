import Item from '../containers/item.component';


const ItemsList = (props) => {
  console.log(props);
  return (
    <div>
      {
        props.data.items.map(item => {
          return <Item data={item} />
        })
      }
    </div>
  )
}
export default ItemsList;