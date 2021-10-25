import dotenv from 'dotenv';
dotenv.config();
const Config = {};

Config.server = process.env.REACT_APP_DATABASESERVER
Config.imageServer = process.env.REACT_APP_IMAGESERVER;

export default Config;