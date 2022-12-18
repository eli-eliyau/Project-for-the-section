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
const express_1 = require("express");
const UsersSchema_1 = __importDefault(require("../schemas/UsersSchema"));
const routerSignin = (0, express_1.Router)();
//אימות של היוזר בכניסה שלו לדאתא 
exports.default = routerSignin.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UsersSchema_1.default.findOne({ pass: req.body.pass });
        console.log(user);
        if ((user === null || user === void 0 ? void 0 : user.pass) === req.body.pass) {
            res.json(user);
        }
    }
    catch (error) {
        console.log(error);
    }
}));
