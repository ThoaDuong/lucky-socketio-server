"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearUserWaitingList = exports.addUserWaitingList = exports.updateUserReleaseAdmin = exports.updateUserTakeAdmin = exports.removeUser = exports.addNewUser = exports.getUserByUsername = exports.users = void 0;
exports.users = [];
const getUserByUsername = (username) => {
    return exports.users.find(user => user.username === username);
};
exports.getUserByUsername = getUserByUsername;
const addNewUser = (user) => {
    exports.users.push(user);
};
exports.addNewUser = addNewUser;
const removeUser = (userId) => {
    const index = exports.users.findIndex(user => user.id === userId);
    exports.users.splice(index, 1);
};
exports.removeUser = removeUser;
const updateUserTakeAdmin = (username) => {
    const index = exports.users.findIndex(user => user.username === username);
    const newUser = Object.assign(Object.assign({}, exports.users[index]), { isAdmin: true });
    exports.users.splice(index, 1, newUser);
};
exports.updateUserTakeAdmin = updateUserTakeAdmin;
const updateUserReleaseAdmin = (username) => {
    const index = exports.users.findIndex(user => user.username === username);
    const newUser = Object.assign(Object.assign({}, exports.users[index]), { isAdmin: false });
    exports.users.splice(index, 1, newUser);
};
exports.updateUserReleaseAdmin = updateUserReleaseAdmin;
const addUserWaitingList = (username, waitingNumber) => {
    const index = exports.users.findIndex(user => user.username === username);
    const newUser = Object.assign(Object.assign({}, exports.users[index]), { waitingList: exports.users[index].waitingList.concat(waitingNumber) });
    exports.users.splice(index, 1, newUser);
};
exports.addUserWaitingList = addUserWaitingList;
const clearUserWaitingList = () => {
    exports.users.map(user => user.waitingList = []);
};
exports.clearUserWaitingList = clearUserWaitingList;
