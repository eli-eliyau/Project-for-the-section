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
exports.adjunctFoTask = exports.taskFoProject = exports.projectPage = void 0;
const ProjectSchema_1 = __importDefault(require("../../schemas/ProjectSchema"));
const TaskAdjunctsSchema_1 = __importDefault(require("../../schemas/TaskAdjunctsSchema"));
const TaskSchema_1 = __importDefault(require("../../schemas/TaskSchema"));
//מביא את כל הנתונים על הפרויקט
const projectPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield ProjectSchema_1.default.findOne({
            _id: req.body.projectId,
        });
        return res.send(project);
    }
    catch (err) {
        console.log(err);
    }
});
exports.projectPage = projectPage;
//מביא את כל המשימות הקשורות לאידי של אותו פרויקט
const taskFoProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield TaskSchema_1.default.find({ projectId: req.body.projectId }, { __v: 0 });
        return res.send(tasks);
    }
    catch (error) {
        console.log(error);
    }
});
exports.taskFoProject = taskFoProject;
const adjunctFoTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adjunct = yield TaskAdjunctsSchema_1.default.find({ taskId: req.body.taskId }, { __v: 0 });
        return res.send(adjunct);
    }
    catch (error) {
        console.log(error);
    }
});
exports.adjunctFoTask = adjunctFoTask;
