import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ItemContext } from "../../helpers.js/context";
import ImageLarge from "../presentational/image-lrg.component";
import Placeholder from "../../assets/add-img.png";

const ImageForm = () => {
  const history = useHistory();

  const { itemData, setItemData } = useContext(ItemContext);
  const [image, setImage] = useState({});
  const [imageRender, setImageRender] = useState({});
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleSubmit = async () => {
    if (!imageUploaded) return alert("Please upload an image");

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
      <h1 className="image-form__header">Please submit an image...</h1>
      {imageUploaded ? (
        <ImageLarge class={"image-form__image-preview"} image={imageRender} />
      ) : (
        <ImageLarge class={"image-form__image-preview"} image={Placeholder} />
      )}
      <input
        className="image-form__input"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(event) => {
          setImage(event.target.files[0]);
          setImageRender(URL.createObjectURL(event.target.files[0]));
          setImageUploaded(true);
        }}
      />
      {imageUploaded && (
        <button className="button-std-light" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default ImageForm;
