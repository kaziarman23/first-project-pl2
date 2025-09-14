"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_js_1 = __importDefault(require("./config/index.js"));
// connecting mongoose
async function main() {
    if (!index_js_1.default.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined in .env");
    }
    try {
        await mongoose_1.default.connect(index_js_1.default.DATABASE_URL);
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}
main().then(() => {
    app_js_1.default.listen(index_js_1.default.PORT, () => {
        console.log(`Server listening on port ${index_js_1.default.PORT}`);
    });
});
//# sourceMappingURL=server.js.map