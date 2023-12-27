"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
const express_1 = __importDefault(require("express"));
const boards_1 = require("../models/boards");
exports.boardRouter = express_1.default.Router();
exports.boardRouter.get('/boards', (req, res) => {
    res.send(boards_1.boards);
});
exports.boardRouter.get('/boards_room', (req, res) => {
    res.send(boards_1.boards_room);
});
