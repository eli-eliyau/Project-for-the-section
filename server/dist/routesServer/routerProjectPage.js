"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectPage_1 = require("./functionFoRoutrs/projectPage");
const router = (0, express_1.Router)();
//מחזיר את כל הנתונים לפרוייקט ספציפי לפי אידי לדף הפרויקט
router.post("/projectPage", projectPage_1.projectPage);
//מחזירה את כל המשימות לדף הפרוייקט לפי אידי של הפרויקט
router.post("/taskFoProject", projectPage_1.taskFoProject);
exports.default = router;
