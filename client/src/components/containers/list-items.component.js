import Item from "../containers/item.component";
import "./list-items.component.css";

const ItemsList = (props) => {
  return (
    <div className="list-items">
      {props.data.map((item) => {
        return <Item data={item} key={item._id} />;
      })}
    </div>
  );
};
export default ItemsList;
