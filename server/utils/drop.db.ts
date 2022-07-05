import Mongoose from "../models/index";

(async () => {
  try {
    await Mongoose.connection.dropDatabase();
    await Mongoose.connection.close();
  } catch (error) {
    return error;
  }
})();
