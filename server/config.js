const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const dataBase = process.env.DATABASE;
const client = process.env.CLIENT;

console.log(PORT, dataBase, client);

module.exports = {
  PORT,
  dataBase,
  client
}

