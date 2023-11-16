import express from 'express';
import { getUserByUsername, users } from '../models/users';

export const userRouter = express.Router();


userRouter.get('/users', (req, res) => {
    res.send(users);
})

userRouter.get('/users/:username', (req, res) => {
    const username = req.params.username;
    res.send(getUserByUsername(username));
})