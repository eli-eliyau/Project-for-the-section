"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createNewTaskPage_1 = require("./functionFoRoutrs/createNewTaskPage");
const router = (0, express_1.Router)();
//יצירת משימה חדשה בטבלה
router.post("/createNewTask", createNewTaskPage_1.createNewTaskPage);
exports.default = router;
