"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editProjectPage_1 = require("./functionFoRoutrs/editProjectPage");
const router = (0, express_1.Router)();
//ראוט שמעדכן פרויקט בטבלה לפי אידי
router.put("/editProject", editProjectPage_1.editProjectPage);
exports.default = router;
