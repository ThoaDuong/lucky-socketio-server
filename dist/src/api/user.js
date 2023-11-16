"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../models/users");
const userRouter = express_1.default.Router();
userRouter.get('/users', (req, res) => {
    res.send(users_1.getUsers);
});
