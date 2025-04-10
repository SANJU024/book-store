// config.js
import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3001;
export const mongoDBURl = process.env.MONGO_URL;
