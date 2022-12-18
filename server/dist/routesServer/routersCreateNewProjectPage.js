"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createNewProjectPage_1 = require("./functionFoRoutrs/createNewProjectPage");
const router = (0, express_1.Router)();
//ראוט יצירת פרויקט חדש בטבלה
router.post("/createNewProject", createNewProjectPage_1.createNewProjectPage);
exports.default = router;
