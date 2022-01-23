import Mongoose from "./index";
import { IItem } from "../utils/types";

const { Schema, model } = Mongoose;

const itemModel = new Schema<IItem>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    default: "No image provided",
  },
  location: {
    type: String,
    required: true,
  },
  lostOrFound: {
    type: Boolean,
    required: true,
  },
  submittedBy: {
    type: String,
    required: true,
  },
});

const Item = model<IItem>("Item", itemModel);

export default Item;
