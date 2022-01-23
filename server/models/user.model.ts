import Mongoose from "./index";
import { IUser } from "../utils/types/index";

const { Schema, model } = Mongoose;

const userModel = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model<IUser>("User", userModel);

export default User;
