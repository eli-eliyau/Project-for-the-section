"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectsHomePage_1 = require("./functionFoRoutrs/projectsHomePage");
const router = (0, express_1.Router)();
//מחזיר את כל הפרוקייטים לדף הבית
router.get("/projectsHome", projectsHomePage_1.projectsHomePage);
//פונקציה שעושה את האימות של התוקן שקביל היוזר בכניסה למערכת לתוקן שנמצא בדאתא
router.post("/authenticateTheLoginOfAPageUser", projectsHomePage_1.authenticateTheLoginOfAPageUser);
exports.default = router;
