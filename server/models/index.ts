import Mongoose from "mongoose";
import { dataBase } from "../config";

Mongoose.connect(dataBase, () => {
  console.log("Connected to mongoose server");
});
export default Mongoose;
