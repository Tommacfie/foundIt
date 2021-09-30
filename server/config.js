const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;
const dataBase = process.env.DATABASE;
const client = process.env.CLIENT;
const accessTokenString = process.env.ACCESSTOKENSECRET;
const accessTokenStringRefresh = process.env.REFRESHTOKENSECRET;

module.exports = {
  PORT,
  dataBase,
  client,
  accessTokenString,
  accessTokenStringRefresh,
};
