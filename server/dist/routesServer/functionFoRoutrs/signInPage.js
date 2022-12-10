"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fo = exports.authenticationToken = exports.signInPage = void 0;
const UsersSchema_1 = __importStar(require("../../schemas/UsersSchema"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//הפונקציה מאמתת את הסיסמא של היוזר ויוצרת תוקן ע"י פונקציה
const signInPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UsersSchema_1.default.findOne({ pass: req.body.pass });
        if ((user === null || user === void 0 ? void 0 : user.pass) === req.body.pass) {
            let newToken = (0, UsersSchema_1.genToken)(user === null || user === void 0 ? void 0 : user._id);
            //מכניס את התוקן שנשלח ליוזר בכניסה למערכת גם לדאתא כדי לאמת בכל כניסה לדף בפרונט
            yield UsersSchema_1.default.findOneAndUpdate({ _id: user === null || user === void 0 ? void 0 : user._id }, { token: newToken });
            return res.json({ token: newToken });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.signInPage = signInPage;
//פונקציה שעושה אימות לתוקן של יוזר
const authenticationToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.header("x-api-key");
        let userId = jsonwebtoken_1.default.verify(token, "ELI");
        req.body.userId = userId;
    }
    catch (error) {
        console.log(error);
    }
    next();
});
exports.authenticationToken = authenticationToken;
//לאחר אימות התוקן נקבל מהפונקציה הקודמת את התוקן המתורגם שהוא אידי של היוזר ואז נבקש את פרטי היוזר ונחזיר לפרונט
const fo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield UsersSchema_1.default.findOne({ _id: req.body.userId }, { dade_created: 0, pass: 0 });
        return res.json(user);
    }
    catch (err) {
        console.log(err);
    }
});
exports.fo = fo;
