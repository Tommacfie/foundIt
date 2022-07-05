import Item from "./Item";

const ItemsList = (props) => {
  return (
    <div className={`${props.class}`}>
      {props.data.map((item) => {
        return <Item data={item} key={item._id} />;
      })}
    </div>
  );
};
export default ItemsList;
