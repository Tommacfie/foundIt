import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ItemContext } from "../../helpers.js/context";
import ImageLarge from "../presentational/image-lrg.component";

const ImageForm = () => {
  const history = useHistory();

  const { itemData, setItemData } = useContext(ItemContext);
  const [image, setImage] = useState({});
  const [imageRender, setImageRender] = useState({});

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "foundit");
    setItemData({ ...itemData, image, formData });
    history.push(
      `/app/create/${itemData.lostOrFound ? "lost" : "found"}/detail`
    );
  };

  return (
    <div className="image-form">
      <h1 className="image-form__header">IMAGE SUBMISSION FORM</h1>
      {imageRender.length ? (
        <ImageLarge image={imageRender} />
      ) : (
        <h1 className="image-form__header--no-image">no image</h1>
      )}
      <input
        className="image-form__input"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(event) => {
          setImage(event.target.files[0]);
          setImageRender(URL.createObjectURL(event.target.files[0]));
        }}
      />
      <button className="button-std" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ImageForm;
