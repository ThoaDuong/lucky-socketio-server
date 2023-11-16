"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewUser = exports.getAllUsers = void 0;
const users = [];
exports.getAllUsers = users;
const addNewUser = (user) => {
    users.push(user);
};
exports.addNewUser = addNewUser;
