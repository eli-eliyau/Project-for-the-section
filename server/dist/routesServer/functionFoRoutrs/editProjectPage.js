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
exports.editProjectPage = void 0;
const ProjectSchema_1 = __importDefault(require("../../schemas/ProjectSchema"));
//ראוט שמעדכן פרויקט לפי אידי שמקבל שתואם לפרויקט
const editProjectPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const editProject = yield ProjectSchema_1.default.updateOne({ _id: req.body.projectId }, req.body.DataAditProject);
        return res.send(editProject);
    }
    catch (error) {
        console.log(error);
    }
});
exports.editProjectPage = editProjectPage;
