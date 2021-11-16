const mongoose = require("../models/index");

mongoose.connection
  .dropDatabase()
  .then(() => {
    console.log("Mock data dropped from database");
  })
  .then(() => {
    mongoose.connection.close();
  });
