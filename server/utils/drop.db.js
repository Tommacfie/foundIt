const mongoose = require("../models/index");

(async () => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  } catch (error) {
    return error;
  }
})();
