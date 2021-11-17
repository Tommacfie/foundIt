import "./icon-create.component.css";
import create from "../../assets/create.png";

const CreateIcon = () => {
  return (
    <div>
      <img src={create} className="create-icon" alt="add-sign"></img>
    </div>
  );
};

export default CreateIcon;
