"use strict";
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
//ראוט שמחזיר את פרטי המשימה בדף הפרוייקט
const express_1 = require("express");
const TaskSchema_1 = __importDefault(require("../schemas/TaskSchema"));
// import routerProject from '../routesBackEnd/routerProject'
const routerTaskMine = (0, express_1.Router)();
module.exports = routerTaskMine.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield TaskSchema_1.default.find({}, { taskStatus: 0 });
    res.send(projects);
    next();
}));
// export const cc=async()=>{
//    await routerTaskMine
//   await  routerProject
// }
