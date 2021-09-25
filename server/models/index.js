const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// const dataBase = process.env.DATABASE; //FIXME

mongoose.connect('mongodb://localhost:27017/founditdatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected to mongoose server');
    // mongoose.connection.db.dropDatabase(); //DELETEME
  });

module.exports = mongoose;
