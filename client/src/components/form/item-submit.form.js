import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ButtonStd from "../presentational/button-std.component";
import { ItemContext } from "../../helpers.js/context";
import "../../scss/components/item-submit.form.scss";

const ItemSubmitForm = () => {
  const [userData, setUserData] = useState({
    title: "",
    location: "",
    brand: "",
    description: "",
  });
  const { itemData, setItemData } = useContext(ItemContext);

  const history = useHistory();

  const handleInputChange = (event) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !userData.title ||
      !userData.location ||
      !userData.brand ||
      !userData.description
    ) {
      console.log("no empty fields!");
      return;
    }

    setItemData({ ...itemData, ...userData });

    history.push(
      `/app/create/${itemData.lostOrFound ? "lost" : "found"}/image`
    );
  };

  //FIX ME - add validation to form fields
  return (
    <form className="lost-found-form" autoComplete="off">
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder={"title"}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="brand"
          placeholder={"brand or model"}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="location"
          placeholder={"where did you lose/find the item?"}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder={"description"}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div onClick={handleSubmit}>
        <ButtonStd text={"Next"} data={userData} />
      </div>
    </form>
  );
};

export default ItemSubmitForm;
