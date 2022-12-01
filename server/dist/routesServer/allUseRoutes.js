"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routersProjectsHomePage_1 = __importDefault(require("./routersProjectsHomePage"));
const routersEditTask_1 = __importDefault(require("./routersEditTask"));
const routersProjectPage_1 = __importDefault(require("./routersProjectPage"));
const routersSignInPage_1 = __importDefault(require("./routersSignInPage"));
const routersCreateNewTaskPage_1 = __importDefault(require("./routersCreateNewTaskPage"));
const routersEditProjectPage_1 = __importDefault(require("./routersEditProjectPage"));
const routersCreateNewProjectPage_1 = __importDefault(require("./routersCreateNewProjectPage"));
const routersCreateNewAdjunctPage_1 = __importDefault(require("./routersCreateNewAdjunctPage"));
const allRoutes = (app) => {
    //בודק כניסה של משתמש למערכת לפי הטבלה האם הוא קיים
    app.use(routersSignInPage_1.default);
    //ראוטים של דף הבית של הפרויקטים
    app.use(routersProjectsHomePage_1.default);
    //ראוטים של דף הפרויקט עצמו
    app.use(routersProjectPage_1.default);
    //ראוט של עידכון משימה 
    app.use(routersEditTask_1.default);
    //ראוט ליצירת משימה חדשה 
    app.use(routersCreateNewTaskPage_1.default);
    //ראוט לעריכת פרויקט קיים
    app.use(routersEditProjectPage_1.default);
    //ראוט יצירת פרויקט חדש בטבלה
    app.use(routersCreateNewProjectPage_1.default);
    //ראוט יצירת ניספח חדש למשימה
    app.use(routersCreateNewAdjunctPage_1.default);
};
exports.default = allRoutes;
