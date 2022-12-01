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
const express_1 = require("express");
const ProjectSchema_1 = __importDefault(require("../schemas/ProjectSchema"));
const routerProjectsHome = (0, express_1.Router)();
module.exports = routerProjectsHome.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield ProjectSchema_1.default.find({}, { users: 0, topUser: 0, projectDescription: 0, projectTeam: 0, projectClient: 0 });
    return res.send(projects);
}));
