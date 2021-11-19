import Item from "./item.component";
import "../../scss/components/list-items.component.scss";

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
