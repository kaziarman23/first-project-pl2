import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);

export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};
