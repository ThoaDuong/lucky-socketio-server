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
                isAdmin: false
            };
            //handle with model
            (0, users_1.addNewUser)(user);
            (0, boards_1.initUsernameInBoard)(username);
            //handle user join room and broadcast event
            socket.join(room);
            socket.broadcast.to(room).emit('someoneJoinRoom', (username));
            //disconnect
            socket.on("disconnect", () => {
                //handle user leave
                (0, users_1.removeUser)(user.id);
                (0, boards_1.removeUsernameInBoard)(username);
                socket.broadcast.to(room).emit('someoneLeaveRoom', (username));
                socket.leave(room);
            });
        });
        //listen user change board
        socket.on('userChangeBoard', ({ username, room, targetBoardId }) => {
            //handle with model
            (0, boards_1.updateUsernameInBoard)(username, targetBoardId);
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
        socket.on('someoneWinGame', ({ username, room }) => {
            socket.broadcast.to(room).emit('endGame', (username));
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
    });
};
exports.ioConfig = ioConfig;
