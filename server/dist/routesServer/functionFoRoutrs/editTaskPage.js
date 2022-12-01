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
Object.defineProperty(exports, "__esModule", { value: true });
exports.editTask = void 0;
const TaskSchema_1 = __importDefault(require("../../schemas/TaskSchema"));
//מעדכן את נתוני המשימה בטבלה לפי אידי של אותה משימה
const editTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const changeValueTask = yield TaskSchema_1.default.updateOne({ _id: req.body._id }, req.body);
        return res.send(changeValueTask);
    }
    catch (error) {
        console.log(error);
    }
});
exports.editTask = editTask;
