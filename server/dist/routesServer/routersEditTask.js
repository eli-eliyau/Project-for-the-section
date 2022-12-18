"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editTaskPage_1 = require("./functionFoRoutrs/editTaskPage");
const router = (0, express_1.Router)();
//מעדכן את נתוני המשימה בטבלה של המשימות לפי אידי של המשימה
router.put("/editTask", editTaskPage_1.editTask);
exports.default = router;
