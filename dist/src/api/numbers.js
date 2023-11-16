"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRouter = void 0;
const express_1 = __importDefault(require("express"));
const numbers_1 = require("../models/numbers");
exports.numberRouter = express_1.default.Router();
exports.numberRouter.get('/numbers/random', (req, res) => {
    res.send(numbers_1.randomNumber);
});
exports.numberRouter.get('/numbers/called', (req, res) => {
    res.send(numbers_1.calledNumbers);
});
