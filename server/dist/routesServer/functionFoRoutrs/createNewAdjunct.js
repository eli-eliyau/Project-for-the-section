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
exports.createNewAdjunct = void 0;
const TaskAdjunctsSchema_1 = __importDefault(require("../../schemas/TaskAdjunctsSchema"));
const createNewAdjunct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAdjunct = yield new TaskAdjunctsSchema_1.default(req.body);
        newAdjunct.save();
        return res.send(newAdjunct);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createNewAdjunct = createNewAdjunct;
