const dotenv = require('dotenv');
dotenv.config();

exports.PORT = process.env.PORT;
exports.dataBase = process.env.DATABASE;
exports.client = process.env.CLIENT;
exports.accessTokenString = process.env.ACCESSTOKENSECRET;
exports.accessTokenStringRefresh = process.env.REFRESHTOKENSECRET;
