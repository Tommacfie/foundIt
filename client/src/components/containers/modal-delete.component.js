import "./modal-delete.component.css";
import ButtonStd from "../presentational/button-std.component";

const ModalDelete = () => {
  return (
    <div className="modal-delete-component">
      <ButtonStd text={"Yes"} />
      <ButtonStd text={"No"} />
    </div>
  );
};
export default ModalDelete;
