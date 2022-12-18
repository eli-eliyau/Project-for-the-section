"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signUpPage_1 = require("./functionFoRoutrs/signUpPage");
const router = (0, express_1.Router)();
// ראוט להרשמה של יוזר חדש
router.post("/signUpPage", signUpPage_1.signUpPage);
exports.default = router;
