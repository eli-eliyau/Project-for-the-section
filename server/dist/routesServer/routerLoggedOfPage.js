"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoggedOff_1 = __importDefault(require("./functionFoRoutrs/LoggedOff"));
const router = (0, express_1.Router)();
//ראוט יצירת ניספח חדש למשימה לפי אידי של המשימה
router.post("/logged-off", LoggedOff_1.default);
exports.default = router;
