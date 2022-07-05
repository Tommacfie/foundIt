import Mongoose from "mongoose";

const mongoose = Mongoose;

import { dataBase } from "../config";

mongoose.connect(dataBase, () => {
  console.log("Connected to mongoose server");
});

export default mongoose;
