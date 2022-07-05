import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ItemContext } from "../../helpers/Context";

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

  const handleSubmit = async (event:SubmitEvent) => {
    event.preventDefault();
    if (
      !userData.title ||
      !userData.location ||
      !userData.brand ||
      !userData.description
    ) {
      return alert("Please complete all fields");
    }

    setItemData({ ...itemData, ...userData });

    history.push(
      `/app/create/${itemData.lostOrFound ? "lost" : "found"}/image`
    );
  };

  //FIX ME - add validation to form fields
  return (
    <form className="item-submit-form" autoComplete="off">
      <h1 className="item-submit-form__header">{`Tell us more about the item you ${
        itemData.lostOrFound ? "lost" : "found"
      }...`}</h1>

      <div className="item-submit-form__form-group">
        <input
          className="item-submit-form__input"
          type="text"
          name="title"
          placeholder={`what did you ${
            itemData.lostOrFound ? "lose" : "find"
          }?`}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="item-submit-form__form-group">
        <input
          className="item-submit-form__input"
          type="text"
          name="brand"
          placeholder={"brand, model, material etc"}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="item-submit-form__form-group">
        <input
          className="item-submit-form__input"
          type="text"
          name="location"
          placeholder={`where did you ${
            itemData.lostOrFound ? "lose" : "find"
          } the item?`}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <div className="item-submit-form__form-group">
        <input
          className="item-submit-form__input"
          type="text"
          name="description"
          placeholder={"please describe the item..."}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      <button
        className="button-std-dark"
        data={userData}
        onClick={handleSubmit}
      >
        Next
      </button>
    </form>
  );
};

export default ItemSubmitForm;
