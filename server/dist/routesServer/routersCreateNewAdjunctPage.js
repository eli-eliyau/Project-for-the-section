"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createNewAdjunct_1 = require("./functionFoRoutrs/createNewAdjunct");
const router = (0, express_1.Router)();
//ראוט יצירת ניספח חדש למשימה לפי אידי של המשימה
router.post("/createNewAdjunct", createNewAdjunct_1.createNewAdjunct);
exports.default = router;
