"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioConfig = void 0;
const socket_io_1 = require("socket.io");
const users_1 = require("./models/users");
const boards_1 = require("./models/boards");
const room_1 = require("./models/room");
const gameState_1 = require("./models/gameState");
// Map lưu disconnect timeout theo username — grace period 30s
const disconnectTimers = new Map();
const GRACE_PERIOD_MS = 30000; // 30 seconds
const ioConfig = (server, corsOptions) => {
    const io = new socket_io_1.Server(server, {
        cors: corsOptions
    });
    io.on('connection', (socket) => {
        //listen user join
        socket.on('userJoinRoom', ({ username, room }) => {
            // Nếu user đang trong grace period (disconnect rồi reconnect), hủy timeout
            const existingTimer = disconnectTimers.get(username);
            if (existingTimer) {
                clearTimeout(existingTimer);
                disconnectTimers.delete(username);
            }
            // Kiểm tra user đã tồn tại (reconnect/refresh case)
            const existingUser = (0, users_1.getUserByUsername)(username);
            if (existingUser && existingUser.room === room) {
                // Cập nhật socket.id mới, giữ nguyên board data
                (0, users_1.updateUserId)(username, socket.id);
                socket.join(room);
                socket.broadcast.to(room).emit('someoneReconnectRoom', (username));
                // Gửi lại game state hiện tại cho user reconnect
                const calledNumbers = (0, gameState_1.getCalledNumbers)(room);
                if (calledNumbers.length > 0) {
                    socket.emit('roomState', {
                        calledNumbers: calledNumbers,
                        randomNumber: calledNumbers[0] || 0
                    });
                }
            }
            else {
                // User mới hoàn toàn
                const user = {
                    id: socket.id,
                    username: username,
                    room: room,
                    isAdmin: false,
                    waitingList: []
                };
                (0, users_1.addNewUser)(user);
                (0, boards_1.initBoardRoom)(username, room);
                socket.join(room);
                socket.broadcast.to(room).emit('someoneJoinRoom', (username));
            }
            //disconnect — grace period 30s trước khi xóa user
            socket.on("disconnect", () => {
                socket.broadcast.to(room).emit('someoneDisconnectRoom', (username));
                const timer = setTimeout(() => {
                    // Hết grace period → xóa user thật sự
                    const user = (0, users_1.getUserByUsername)(username);
                    if (user) {
                        (0, users_1.removeUser)(username);
                        (0, boards_1.removeBoardRoom)(username, room);
                        // if the last person in the room, remove the room from the start list
                        const index = boards_1.boards_room.findIndex(item => item.room === room);
                        if (index === -1) {
                            (0, room_1.removeStartedRoom)(room);
                        }
                        socket.broadcast.to(room).emit('someoneLeaveRoom', (username));
                        socket.leave(room);
                    }
                    disconnectTimers.delete(username);
                }, GRACE_PERIOD_MS);
                disconnectTimers.set(username, timer);
            });
        });
        //handle leave room
        socket.on("userLeaveRoom", ({ username, room }) => {
            // Hủy grace period timer nếu có (user chủ động leave)
            const existingTimer = disconnectTimers.get(username);
            if (existingTimer) {
                clearTimeout(existingTimer);
                disconnectTimers.delete(username);
            }
            //handle user leave
            const user = (0, users_1.getUserByUsername)(username);
            if (user) {
                (0, users_1.removeUser)(username);
                (0, boards_1.removeBoardRoom)(username, room);
                // if the last person in the room, remove the room from the start list if there is one
                const index = boards_1.boards_room.findIndex(item => item.room === room);
                if (index === -1) {
                    (0, room_1.removeStartedRoom)(room);
                }
                socket.broadcast.to(room).emit('someoneLeaveRoom', (username));
                socket.leave(room);
            }
        });
        //listen user change board
        socket.on('userChangeBoard', ({ username, room, targetBoardId }) => {
            //handle with model
            (0, boards_1.updateBoardRoom)(username, room, targetBoardId);
            //send event to client
            io.to(room).emit('someoneChangeBoardToAll');
        });
        //listen someone change speaker
        socket.on('changeSpeakerMuted', ({ username, room, speakerMuted }) => {
            (0, boards_1.updateBoardRoomSpeakerMuted)(username, room, speakerMuted);
            io.to(room).emit('someoneChangeSpeakerMuted');
        });
        //listen user rename
        socket.on('userRename', ({ oldUsername, newUsername, room }) => {
            // We already updated models via the REST API, 
            // so we just broadcast to other clients to refresh their board list.
            socket.broadcast.to(room).emit('someoneRenameToAll', { oldUsername, newUsername });
        });
        //listen change numbers
        socket.on('changeRandomNumber', ({ randomNumber, calledNumbers, room }) => {
            // Lưu calledNumbers vào server để persist qua reconnect
            (0, gameState_1.setCalledNumbers)(room, calledNumbers);
            io.to(room).emit('updateRandomNumber', {
                randomNumber: randomNumber,
                calledNumbers: calledNumbers
            });
        });
        socket.on('changeMicMuted', ({ username, room, micMuted }) => {
            (0, boards_1.updateBoardRoomMicMuted)(username, room, micMuted);
            io.to(room).emit('someoneChangeMicMuted');
        });
        //listen stop and clear numbers
        socket.on('changeStopAndClear', (room) => {
            // Xóa calledNumbers khi game kết thúc
            (0, gameState_1.clearCalledNumbers)(room);
            io.to(room).emit('updateStopAndClear');
        });
        //listen someone send message
        socket.on('someoneSendMessage', ({ room, username, message }) => {
            io.to(room).emit('someoneSendMessageToAll', ({ username, message }));
        });
        //listen someone win game
        socket.on('someoneWinGame', ({ username, room, winNumber }) => {
            //handle anyone also waiting winNumber
            const usersWin = users_1.users === null || users_1.users === void 0 ? void 0 : users_1.users.filter(u => u.waitingList.indexOf(winNumber) !== -1 &&
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
