import "dotenv/config";
import app from "./app.js";
import mongoose from "mongoose";

// connecting mongoose
async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in .env");
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

const PORT = process.env.PORT;

main().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
