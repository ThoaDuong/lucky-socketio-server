"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../models/users");
exports.userRouter = express_1.default.Router();
exports.userRouter.get('/users', (req, res) => {
    res.send(users_1.users);
});
exports.userRouter.get('/users/:username', (req, res) => {
    const username = req.params.username;
    res.send((0, users_1.getUserByUsername)(username));
});
