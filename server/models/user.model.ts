import { Schema, model } from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

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
