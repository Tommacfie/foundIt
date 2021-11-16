const mongoose = require("mongoose");
const { dataBase } = require("../config");

mongoose.connect(
  dataBase,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to mongoose server");
  }
);
// mongoose.connection.dropDatabase();
module.exports = mongoose;
