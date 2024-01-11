"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRouter = void 0;
const express_1 = __importDefault(require("express"));
const room_1 = require("../models/room");
exports.roomRouter = express_1.default.Router();
exports.roomRouter.get('/started_room', (req, res) => {
    res.send(room_1.listStartedRoom);
});
exports.roomRouter.get('/started_room/add', (req, res) => {
    var _a;
    const room = ((_a = req.query) === null || _a === void 0 ? void 0 : _a.room) ? req.query.room.toString() : '';
    (0, room_1.addStartedRoom)(room);
    res.send(room_1.listStartedRoom);
});
exports.roomRouter.get('/started_room/remove', (req, res) => {
    var _a;
    const room = ((_a = req.query) === null || _a === void 0 ? void 0 : _a.room) ? req.query.room.toString() : '';
    (0, room_1.removeStartedRoom)(room);
    res.send(room_1.listStartedRoom);
});
