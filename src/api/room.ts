import express from 'express';
import { addStartedRoom, listStartedRoom, removeStartedRoom } from '../models/room';

export const roomRouter = express.Router();

roomRouter.get('/started_room', (req, res) => {
    res.send(listStartedRoom);
})

roomRouter.get('/started_room/add', (req, res) => {
    const room = req.query?.room ? req.query.room.toString() : '';
    addStartedRoom(room);
    res.send(listStartedRoom);
})

roomRouter.get('/started_room/remove', (req, res) => {
    const room = req.query?.room ? req.query.room.toString() : '';
    removeStartedRoom(room);
    res.send(listStartedRoom);
})