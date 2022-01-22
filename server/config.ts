import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env["PORT"] || "";
export const dataBase = process.env["DATABASE"] || "";
export const client = process.env["CLIENT"] || "";
export const accessTokenString = process.env["ACCESSTOKENSECRET"] || "";
export const accessTokenStringRefresh = process.env["REFRESHTOKENSECRET"] || "";
