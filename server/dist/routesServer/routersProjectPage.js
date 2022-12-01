"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectPage_1 = require("./functionFoRoutrs/projectPage");
const router = (0, express_1.Router)();
//מחזיר את כל הנתונים לפרוייקט ספציפי לפי אידי לדף הפרויקט
router.post("/projectPage", projectPage_1.projectPage);
//מחזיר את כל המשימות לדף הפרוייקט לפי אידי של הפרויקט
router.post("/taskFoProject", projectPage_1.taskFoProject);
//מחזיר את כל הנספחים השייכים לאידי של אותה משימה
router.post("/adjunctFoTask", projectPage_1.adjunctFoTask);
exports.default = router;
