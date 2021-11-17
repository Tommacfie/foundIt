import Item from "./item.component";
import "../../scss/list-items.component.scss";

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
