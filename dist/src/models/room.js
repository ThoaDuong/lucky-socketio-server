"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeStartedRoom = exports.addStartedRoom = exports.listStartedRoom = void 0;
exports.listStartedRoom = [];
const addStartedRoom = (room) => {
    const index = exports.listStartedRoom.findIndex(item => item === room);
    if (index === -1) {
        exports.listStartedRoom.push(room);
    }
};
exports.addStartedRoom = addStartedRoom;
const removeStartedRoom = (room) => {
    const index = exports.listStartedRoom.findIndex(item => item === room);
    exports.listStartedRoom.splice(index, 1);
};
exports.removeStartedRoom = removeStartedRoom;
