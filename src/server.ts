import app from "./app.js";
import mongoose from "mongoose";
import config from "./config/index.js";

// connecting mongoose
async function main() {
  if (!config.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in .env");
  }

  try {
    await mongoose.connect(config.DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

main().then(() => {
  app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
  });
});
