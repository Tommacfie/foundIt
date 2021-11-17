import ButtonStd from "../presentational/button-std.component";
import "../../scss/modal-delete.component.scss";

const ModalDelete = () => {
  return (
    <div className="modal-delete-component">
      <ButtonStd text={"Yes"} />
      <ButtonStd text={"No"} />
    </div>
  );
};
export default ModalDelete;
