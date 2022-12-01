"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./DB/MongoConnect");
const cors_1 = __importDefault(require("cors"));
const allUseRoutes_1 = __importDefault(require("./routesServer/allUseRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, allUseRoutes_1.default)(app);
console.log(1);
app.listen(3001, () => {
    console.log("3001");
});
//finalP
//ym9TsvaCQwzsuu17
