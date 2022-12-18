"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routerSignInPage_1 = __importDefault(require("./routerSignInPage"));
const routerProjectsHomePage_1 = __importDefault(require("./routerProjectsHomePage"));
const routerProjectPage_1 = __importDefault(require("./routerProjectPage"));
const allRoutes = (app) => {
    app.use("/signIn", routerSignInPage_1.default);
    app.use("/projects", routerProjectsHomePage_1.default);
    app.use("/project-page", routerProjectPage_1.default);
    // app.use("/tasks-for a project page",routerTaskMine)
};
exports.default = allRoutes;
