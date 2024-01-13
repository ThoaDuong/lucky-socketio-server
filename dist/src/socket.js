"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioConfig = void 0;
const socket_io_1 = require("socket.io");
const users_1 = require("./models/users");
const boards_1 = require("./models/boards");
const ioConfig = (server, corsOptions) => {
    const io = new socket_io_1.Server(server, {
        cors: corsOptions
    });
    io.on('connection', (socket) => {
        //listen user join
        socket.on('userJoinRoom', ({ username, room }) => {
            const user = {
                id: socket.id,
                username: username,
                room: room,
                isAdmin: false,
                waitingList: []
            };
            //handle with model
            (0, users_1.addNewUser)(user);
            (0, boards_1.initBoardRoom)(username, room);
            //handle user join room and broadcast event
            socket.join(room);
            socket.broadcast.to(room).emit('someoneJoinRoom', (username));
            //disconnect
            socket.on("disconnect", () => {
                //handle user leave
                (0, users_1.removeUser)(user.id);
                (0, boards_1.removeBoardRoom)(username, room);
                socket.broadcast.to(room).emit('someoneLeaveRoom', (username));
                socket.leave(room);
            });
        });
        //listen user change board
        socket.on('userChangeBoard', ({ username, room, targetBoardId }) => {
            //handle with model
            (0, boards_1.updateBoardRoom)(username, room, targetBoardId);
            //send event to client
            io.to(room).emit('someoneChangeBoardToAll');
        });
        //listen change numbers
        socket.on('changeRandomNumber', ({ randomNumber, calledNumbers, room }) => {
            io.to(room).emit('updateRandomNumber', {
                randomNumber: randomNumber,
                calledNumbers: calledNumbers
            });
        });
        //listen stop and clear numbers
        socket.on('changeStopAndClear', (room) => {
            io.to(room).emit('updateStopAndClear');
        });
        //listen someone send message
        socket.on('someoneSendMessage', ({ room, username, message }) => {
            io.to(room).emit('someoneSendMessageToAll', ({ username, message }));
        });
        //listen someone win game
        socket.on('someoneWinGame', ({ username, room, winNumber }) => {
            //handle anyone also waiting winNumber
            const usersWin = users_1.users.filter(u => u.waitingList.indexOf(winNumber) !== -1 &&
                u.username !== username);
            if (usersWin.length > 0) {
                //multiple winner
                let usernameList = username;
                usersWin.forEach(user => {
                    usernameList = usernameList.concat(` and ${user.username}`);
                });
                io.to(room).emit('winGameMultiple', usernameList);
            }
            else {
                //one winner
                io.to(room).emit('winGameOne', username);
            }
            (0, users_1.clearUserWaitingList)();
        });
        socket.on('gonnaWin', ({ username, room, waitingNumber }) => {
            //handle add waiting number
            (0, users_1.addUserWaitingList)(username, waitingNumber);
            io.to(room).emit('someoneGonnaWinToAll', (username));
        });
        //listen user take admin
        socket.on('userTakeAdmin', ({ username, room }) => {
            (0, users_1.updateUserTakeAdmin)(username);
            io.to(room).emit('someoneTakeAdminToAll');
        });
        //listen user take admin
        socket.on('userReleaseAdmin', ({ username, room }) => {
            (0, users_1.updateUserReleaseAdmin)(username);
            io.to(room).emit('someoneReleaseAdminToAll');
        });
        //listen someone typing
        socket.on('typingMessage', ({ username, room }) => {
            socket.broadcast.to(room).emit('someoneTypingMessage', username);
        });
        //listen someone no longer typing
        socket.on('noLongerTypingMessage', ({ username, room }) => {
            socket.broadcast.to(room).emit('someoneNoLongerTyping', username);
        });
    });
};
exports.ioConfig = ioConfig;
