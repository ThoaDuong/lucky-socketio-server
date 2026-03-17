"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../models/users");
const boards_1 = require("../models/boards");
exports.userRouter = express_1.default.Router();
exports.userRouter.get('/users', (req, res) => {
    res.send(users_1.users);
});
exports.userRouter.get('/users/:username', (req, res) => {
    const username = req.params.username;
    res.send((0, users_1.getUserByUsername)(username));
});
exports.userRouter.put('/users/:username', (req, res) => {
    const oldUsername = req.params.username;
    const { newUsername, room } = req.body;
    if (!newUsername || !room) {
        return res.status(400).send({ error: 'Missing newUsername or room in body' });
    }
    if (oldUsername === newUsername) {
        return res.status(200).send({ message: 'Nothing to update' });
    }
    // Check conflict
    const existingUser = (0, users_1.getUserByUsername)(newUsername);
    if (existingUser) {
        return res.status(409).send({ error: 'Username already exists' });
    }
    // Update in memory models
    (0, users_1.updateUserName)(oldUsername, newUsername);
    (0, boards_1.updateBoardRoomUsername)(oldUsername, newUsername, room);
    return res.status(200).send({ message: 'Username updated successfully', newUsername });
});
