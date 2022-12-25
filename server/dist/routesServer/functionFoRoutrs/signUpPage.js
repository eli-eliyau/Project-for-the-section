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
exports.signUpPage = void 0;
const UsersSchema_1 = __importDefault(require("../../schemas/UsersSchema"));
// פונקציה שמקבל פרטים על יוזר חדש ומכניסה אותו לדאטא
const signUpPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userName = yield UsersSchema_1.default.findOne({ name: req.body.name });
        if (userName) {
            return res.send("משתמש קיים במערכת");
        }
        else {
            const user = yield new UsersSchema_1.default(req.body);
            user.save();
            return res.send(user);
        }
    }
    catch (err) {
        console.error(err);
        res.status(401).send(false);
    }
});
exports.signUpPage = signUpPage;
