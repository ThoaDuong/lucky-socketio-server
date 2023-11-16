import { Server } from 'socket.io';
import { User } from './interfaces/User';
import { addNewUser, removeUser, updateUserReleaseAdmin, updateUserTakeAdmin } from './models/users';
import { initUsernameInBoard, removeUsernameInBoard, updateUsernameInBoard } from './models/boards';

export const ioConfig = (server: any, corsOptions: any) => {

    const io = new Server(server, {
        cors: corsOptions
    });


    io.on('connection', (socket) => {
        
        //listen user join
        socket.on('userJoinRoom', ({username, room}) => {    
            const user: User = {
                id: socket.id,
                username: username,
                room: room,
                isAdmin: false
            }
            //handle with model
            addNewUser(user);
            initUsernameInBoard(username);
            //handle user join room and broadcast event
            socket.join(room);
            socket.broadcast.to(room).emit('someoneJoinRoom', (username));
    
            //disconnect
            socket.on("disconnect", () => {
                //handle user leave
                removeUser(user.id);
                removeUsernameInBoard(username);
                socket.broadcast.to(room).emit('someoneLeaveRoom', (username));
                socket.leave(room);
            })
        })

        //listen user change board
        socket.on('userChangeBoard', ({username, room, targetBoardId}) => {
            //handle with model
            updateUsernameInBoard(username, targetBoardId);
            //send event to client
            io.to(room).emit('someoneChangeBoardToAll');
        })

        //listen change numbers
        socket.on('changeRandomNumber', ({randomNumber, calledNumbers, room}) => {
            io.to(room).emit('updateRandomNumber', {
                randomNumber: randomNumber,
                calledNumbers: calledNumbers
            });
        })

        //listen stop and clear numbers
        socket.on('changeStopAndClear', (room) => {
            io.to(room).emit('updateStopAndClear');
        })

        //listen someone send message
        socket.on('someoneSendMessage', ({room, username, message}) => {
            io.to(room).emit('someoneSendMessageToAll', ({username, message}));
        })

        //listen someone win game
        socket.on('someoneWinGame', ({username, room}) => {
            socket.broadcast.to(room).emit('endGame', (username));
        })

        //listen user take admin
        socket.on('userTakeAdmin', ({username, room}) => {
            updateUserTakeAdmin(username);
            io.to(room).emit('someoneTakeAdminToAll');
        })

        //listen user take admin
        socket.on('userReleaseAdmin', ({username, room}) => {
            updateUserReleaseAdmin(username);
            io.to(room).emit('someoneReleaseAdminToAll');
        })
    })
}
