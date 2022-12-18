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
exports.authenticateTheLoginOfAPageUser = exports.projectsHomePage = void 0;
const ProjectSchema_1 = __importDefault(require("../../schemas/ProjectSchema"));
const UsersSchema_1 = __importDefault(require("../../schemas/UsersSchema"));
//מחזיר את כל הפרויקטים לדף הבית אבל רק שם סטטוס ומצב
const projectsHomePage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield ProjectSchema_1.default.find({}, {
            users: 0,
            topUser: 0,
            projectDescription: 0,
            projectTeam: 0,
            projectClient: 0,
            __v: 0,
        });
        return res.send(projects);
    }
    catch (err) {
        console.log(err);
    }
});
exports.projectsHomePage = projectsHomePage;
//פונקציה שעושה את האימות של התוקן שקביל היוזר בכניסה למערכת לתוקן שנמצא בדאתא
const authenticateTheLoginOfAPageUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userData = yield UsersSchema_1.default.findOne({ token: req.body.token }, { _id: 0, pass: 0, dade_created: 0 });
        return res.json(userData);
    }
    catch (err) {
        console.error(err);
    }
});
exports.authenticateTheLoginOfAPageUser = authenticateTheLoginOfAPageUser;
