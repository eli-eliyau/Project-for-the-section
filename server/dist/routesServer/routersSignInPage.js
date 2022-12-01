"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signInPage_1 = require("./functionFoRoutrs/signInPage");
const router = (0, express_1.Router)();
//הפונקציה מאמתת את הסיסמא של היוזר בדאתא ואז מקבלת תוקן עבור היוזר ומחזירה אותו לפרונט
router.post("/signInPage", signInPage_1.signInPage);
//הראוט מקבל את התוקן מהפרונט ןאז הפונקציה הראושנה מאמתת את התוקן ומחזירה שהיוזר נמצא בדאתא
router.get("/authenticationToken", signInPage_1.authenticationToken, signInPage_1.fo);
exports.default = router;
