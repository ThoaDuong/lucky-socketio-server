import express from 'express';
import { boards, boards_room } from '../models/boards';

export const boardRouter = express.Router();

boardRouter.get('/boards', (req, res) => {
    res.send(boards);
})
boardRouter.get('/boards_room', (req, res) => {
    res.send(boards_room);
})