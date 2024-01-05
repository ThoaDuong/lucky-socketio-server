"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBoardRoom = exports.removeBoardRoom = exports.initBoardRoom = exports.boards_room = exports.boards = void 0;
exports.boards = [
    {
        id: 1,
        color: "#719FB0",
        title: "Sad blue",
        username: null,
        numbers: [
            [7, 16, null, 32, null, null, 66, 73, null],
            [null, 18, 29, null, 46, 55, null, null, 88],
            [2, null, 23, 34, null, 50, null, 75, null],
            [4, null, null, 30, 40, null, 61, 78, null],
            [null, 10, 27, null, 41, 56, null, null, 86],
            [null, null, 20, 39, null, 59, 60, null, 83],
            [9, null, 24, null, null, 51, 64, null, 81],
            [3, null, 28, null, 48, 53, null, null, 80],
            [null, 17, null, 37, 45, null, 63, 77, null]
        ]
    },
    {
        id: 2,
        color: "#FFD24C",
        title: "Pink",
        username: null,
        numbers: [
            [null, 19, 28, null, 46, null, 68, 75, null],
            [5, null, 26, 39, null, 58, null, 78, null],
            [null, 14, null, 37, null, 50, 69, null, 84],
            [3, null, 25, null, null, 57, 60, null, 86],
            [null, 16, null, 31, 49, null, null, 77, 89],
            [8, 17, null, null, 48, 59, null, 79, null],
            [null, 15, 20, null, 44, 52, null, 70, null],
            [4, null, null, 33, 41, null, 61, null, 83],
            [9, null, 29, 30, null, null, 62, null, 88]
        ]
    },
    {
        id: 3,
        color: "#FF7396",
        title: "Pink 1",
        username: null,
        numbers: [
            [5, null, 29, 30, null, 56, null, null, 80],
            [null, 10, null, 35, null, 54, 63, null, 81],
            [4, null, 26, null, 45, null, 61, 79, null],
            [3, 14, null, null, 43, 50, null, 71, null],
            [7, null, 23, 31, null, 52, null, 73, null],
            [null, 11, 28, null, 49, null, 69, null, 89],
            [null, null, 24, 34, null, 53, 67, null, 85],
            [null, null, 27, null, 40, 57, null, 76, 87],
            [1, 16, null, 33, null, null, 65, 78, null]
        ]
    },
    {
        id: 4,
        color: "#F76262",
        title: "Purple",
        username: null,
        numbers: [
            [null, 14, 28, null, null, 50, null, 75, 90],
            [null, 19, null, 31, 49, null, 68, null, 81],
            [5, null, 20, null, 47, null, null, 77, 84],
            [null, 12, null, 38, null, 55, 69, null, 89],
            [1, null, null, 36, 41, null, 66, 71, null],
            [null, 18, 26, null, null, 57, null, 70, 88],
            [8, null, 25, 33, null, 52, 62, null, null],
            [9, null, null, 35, 46, null, 60, 73, null],
            [null, 10, 27, null, 48, 59, null, null, 86]
        ]
    },
    {
        id: 5,
        color: '#40A798',
        title: 'Blue',
        username: null,
        numbers: [
            [9, 16, null, null, 46, null, 65, null, 80],
            [null, 11, null, 32, 45, null, 68, 78, null],
            [8, null, 21, 33, null, 57, null, 73, null],
            [6, null, 20, null, 43, null, 63, 77, null],
            [null, 12, null, 31, null, 54, 62, null, 85],
            [null, 19, null, 39, 40, null, null, 70, 82],
            [null, 18, 29, null, null, 58, null, 74, 90],
            [null, 17, null, 38, 44, null, 69, null, 88],
            [2, null, 27, 37, null, 55, 67, null, null]
        ]
    },
    {
        id: 6,
        color: '#845EC2',
        title: 'Purple 2',
        username: null,
        numbers: [
            [null, 11, null, 35, null, 59, 68, null, 80],
            [null, 17, 24, null, 42, 57, null, 76, null],
            [1, null, 27, null, 48, null, null, 79, 81],
            [7, 16, null, 31, null, null, 65, 77, null],
            [null, null, 23, null, 44, 50, null, 71, 85],
            [null, 14, null, 37, 49, null, 63, null, 88],
            [3, null, 20, null, 46, null, 67, 73, null],
            [8, 12, null, 34, 45, null, null, null, 87],
            [null, 19, null, 39, null, 55, 60, null, 89]
        ]
    },
    {
        id: 7,
        color: '#F5A962',
        title: 'Red',
        username: null,
        numbers: [
            [null, 19, null, 32, null, 58, 64, null, 84],
            [null, 13, 20, null, 48, 55, null, 77, null],
            [2, null, 21, null, 46, null, null, 75, 82],
            [6, 18, null, 39, null, null, 62, 70, null],
            [null, null, 25, null, 41, 59, null, 74, 83],
            [null, 17, null, 38, 44, null, 60, null, 86],
            [8, null, 22, null, 47, null, 66, 72, null],
            [9, 12, null, 37, 42, null, null, null, 88],
            [null, 15, null, 36, null, 51, 68, null, 90]
        ]
    },
    {
        id: 8,
        color: '#92B4EC',
        title: 'Blue 2',
        username: null,
        numbers: [
            [null, 13, 22, null, 41, null, 61, null, 86],
            [3, null, 24, 34, null, 52, null, 71, null],
            [1, null, null, 35, null, 56, 64, null, 83],
            [7, null, 23, 36, null, 53, null, 75, null],
            [5, null, null, null, 48, 59, null, 72, 84],
            [null, 14, 28, null, 42, null, 60, null, 87],
            [null, null, 26, null, 47, 50, null, 79, 89],
            [4, 10, null, 30, 49, null, 66, null, null],
            [null, 15, 25, null, null, 51, null, 76, 81]
        ]
    },
    {
        id: 9,
        title: 'Green 1',
        color: '#36AE7C',
        username: null,
        numbers: [
            [null, 12, null, 34, 40, null, null, 75, 89],
            [8, 16, null, null, 42, 55, null, 77, null],
            [5, null, 24, 33, null, null, 67, null, 83],
            [null, 14, 27, null, null, 51, null, 78, 84],
            [null, 18, null, 38, 46, null, 63, null, 81],
            [9, null, null, null, 47, null, 66, 79, 86],
            [4, null, 28, 31, null, 57, null, 72, null],
            [null, 17, null, 36, null, 52, 64, null, 80],
            [null, 19, 23, null, 45, null, 62, 74, null]
        ]
    },
    {
        id: 10,
        title: 'Purple 1',
        color: '#BC7AF9',
        username: null,
        numbers: [
            [6, 18, null, null, 47, null, 69, null, 86],
            [null, 13, null, 31, 44, null, 61, 70, null],
            [7, null, 24, 34, null, 56, null, 71, null],
            [5, null, 23, null, 41, null, 65, 74, null],
            [null, 10, null, 37, null, 53, 60, null, 89],
            [null, 17, null, 38, 42, null, null, 75, 84],
            [null, 15, 25, null, null, 51, null, 77, 85],
            [null, 12, null, 36, 43, null, 64, null, 82],
            [3, null, 26, 39, null, 58, 66, null, null]
        ]
    },
    {
        id: 11,
        title: 'Yellow 1',
        color: '#E9896A',
        username: null,
        numbers: [
            [null, 14, 28, null, null, 50, null, 75, 90],
            [null, 19, null, 31, 49, null, 68, null, 81],
            [5, null, 20, null, 47, null, null, 77, 84],
            [null, 12, null, 38, null, 55, 69, null, 89],
            [1, null, null, 36, 41, null, 66, 71, null],
            [null, 18, 26, null, null, 57, null, 70, 88],
            [8, null, 25, 33, null, 52, 62, null, null],
            [9, null, null, 35, 46, null, 60, 73, null],
            [null, 10, 27, null, 48, 59, null, null, 86]
        ]
    },
    {
        id: 12,
        title: 'Blue 1',
        color: '#87C4FF',
        username: null,
        numbers: [
            [null, 15, 24, null, 44, null, 64, 79, null],
            [4, null, 29, 30, null, 51, null, 76, null],
            [null, 17, null, 32, null, 53, 63, null, 80],
            [7, null, 23, null, null, 56, 61, null, 85],
            [null, 11, null, 34, 42, null, null, 72, 87],
            [3, 13, null, null, 45, 54, null, 74, null],
            [null, 16, 21, null, 43, 58, null, 78, null],
            [6, null, null, 37, 40, null, 65, null, 82],
            [2, null, 22, 39, null, null, 67, null, 83]
        ]
    },
];
exports.boards_room = [];
const initBoardRoom = (username, room) => {
    let boardId = 0;
    for (let i = 0; i < exports.boards.length; i++) {
        //check if boardId not exist in boards_room
        const index = exports.boards_room.findIndex(b => b.boardId === exports.boards[i].id &&
            b.room === room);
        if (index === -1) {
            //init boardId and stop the loop
            boardId = exports.boards[i].id;
            break;
        }
    }
    exports.boards_room.push({
        username: username,
        room: room,
        boardId: boardId,
    });
};
exports.initBoardRoom = initBoardRoom;
const removeBoardRoom = (username, room) => {
    const currentIndex = exports.boards_room.findIndex(b => b.username === username && b.room === room);
    exports.boards_room.splice(currentIndex, 1);
};
exports.removeBoardRoom = removeBoardRoom;
const updateBoardRoom = (username, room, targetBoardId) => {
    const currentIndex = exports.boards_room.findIndex(b => b.username === username && b.room === room);
    const newObject = Object.assign(Object.assign({}, exports.boards_room[currentIndex]), { boardId: targetBoardId });
    exports.boards_room.splice(currentIndex, 1, newObject);
};
exports.updateBoardRoom = updateBoardRoom;
///////////
// export const initUsernameInBoard = (username: string) => {
//     const index = boards.findIndex(board => board.username === null);
//     const newBoardData = { ...boards[index], username: username }
//     boards.splice(index, 1, newBoardData);
// }
//change username exist in boards to null
// export const removeUsernameInBoard = (username: string) => {
//     const indexChange = boards.findIndex(board => board.username === username);
//     const newBoardChange = { ...boards[indexChange], username: null }
//     boards.splice(indexChange, 1, newBoardChange);
// }
// export const updateUsernameInBoard = (username: string, targetBoardId: number) => {
//     removeUsernameInBoard(username);
//     const indexTarget = boards.findIndex(board => board.id === targetBoardId);
//     const newBoardTarget = { ...boards[indexTarget], username: username };
//     boards.splice(indexTarget, 1, newBoardTarget);
// }
// export const getBoardByUsername = (username: string) => {
//     const board = boards.find(board => board.username === username);
//     return board;
// }
