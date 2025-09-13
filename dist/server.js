"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
// connecting mongoose
async function main() {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined in .env");
    }
    try {
        await mongoose_1.default.connect(process.env.DATABASE_URL);
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}
const PORT = process.env.PORT;
main().then(() => {
    app_js_1.default.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
//# sourceMappingURL=server.js.map