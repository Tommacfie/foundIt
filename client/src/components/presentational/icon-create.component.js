import create from "../../assets/create.png";
import "../../scss/icon-create.component.scss";

const CreateIcon = () => {
  return (
    <div>
      <img src={create} className="create-icon" alt="add-sign"></img>
    </div>
  );
};

export default CreateIcon;
