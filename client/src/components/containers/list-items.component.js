import Item from "./item.component";

const ItemsList = (props) => {
  return (
    <div className="items-list">
      {props.data.map((item) => {
        return <Item data={item} key={item._id} />;
      })}
    </div>
  );
};
export default ItemsList;
