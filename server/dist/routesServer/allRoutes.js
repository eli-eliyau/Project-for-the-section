"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routerProjectsHomePage_1 = __importDefault(require("./routerProjectsHomePage"));
const routerProjectPage_1 = __importDefault(require("./routerProjectPage"));
const routerTaskMine_1 = __importDefault(require("./routerTaskMine"));
const routerProjectPage_2 = __importDefault(require("./routerProjectPage"));
const allRoutes = (app) => {
    app.use(routerProjectsHomePage_1.default);
    app.use(routerProjectPage_2.default);
    app.use(routerProjectPage_1.default);
    app.use("/", routerTaskMine_1.default);
};
exports.default = allRoutes;
