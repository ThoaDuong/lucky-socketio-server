"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCalledNumbers = exports.setCalledNumbers = exports.getCalledNumbers = void 0;
// Store called numbers per room for game state persistence
const roomCalledNumbers = new Map();
/** Get called numbers for a specific room */
const getCalledNumbers = (room) => {
    return roomCalledNumbers.get(room) || [];
};
exports.getCalledNumbers = getCalledNumbers;
/** Update called numbers for a specific room */
const setCalledNumbers = (room, calledNumbers) => {
    roomCalledNumbers.set(room, calledNumbers);
};
exports.setCalledNumbers = setCalledNumbers;
/** Clear called numbers when game ends or room is empty */
const clearCalledNumbers = (room) => {
    roomCalledNumbers.delete(room);
};
exports.clearCalledNumbers = clearCalledNumbers;
