import dotenv from "dotenv";

dotenv.config();
let Config: { server: string, imageServer: string };

Config.server = process.env.REACT_APP_DATABASESERVER;
Config.imageServer = process.env.REACT_APP_IMAGESERVER;

export default Config;
