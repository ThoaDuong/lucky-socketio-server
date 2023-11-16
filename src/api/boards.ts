import express from 'express';
import { boards, getBoardByUsername, updateUsernameInBoard } from '../models/boards';

export const boardRouter = express.Router();

boardRouter.get('/boards', (req, res) => {
    res.send(boards);
})

boardRouter.get('/boards/:username', (req, res) => {
    const username = req.params.username;
    res.send(getBoardByUsername(username));
})

boardRouter.put('/boards', (req, res) => {
    const { username, targetBoardId } = JSON.parse(req.body);
    res.send(updateUsernameInBoard(username, targetBoardId));
})