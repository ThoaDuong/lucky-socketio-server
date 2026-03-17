import express from 'express';
import { getUserByUsername, updateUserName, users } from '../models/users';
import { updateBoardRoomUsername } from '../models/boards';

export const userRouter = express.Router();


userRouter.get('/users', (req, res) => {
    res.send(users);
})

userRouter.get('/users/:username', (req, res) => {
    const username = req.params.username;
    res.send(getUserByUsername(username));
})

userRouter.put('/users/:username', (req, res) => {
    const oldUsername = req.params.username;
    const { newUsername, room } = req.body;

    if (!newUsername || !room) {
        return res.status(400).send({ error: 'Missing newUsername or room in body' });
    }

    if (oldUsername === newUsername) {
        return res.status(200).send({ message: 'Nothing to update' });
    }

    // Check conflict
    const existingUser = getUserByUsername(newUsername);
    if (existingUser) {
        return res.status(409).send({ error: 'Username already exists' });
    }

    // Update in memory models
    updateUserName(oldUsername, newUsername);
    updateBoardRoomUsername(oldUsername, newUsername, room);

    return res.status(200).send({ message: 'Username updated successfully', newUsername });
});