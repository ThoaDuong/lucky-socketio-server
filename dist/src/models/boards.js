"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoGenerateRandomBoard = exports.updateBoardRoomMicMuted = exports.updateBoardRoom = exports.removeBoardRoom = exports.initBoardRoom = exports.boards_room = exports.boards = void 0;
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
        color: "#FFC436",
        title: "Yellow",
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
    {
        id: 13,
        title: 'Red',
        color: '#FF6868',
        username: null,
        numbers: [
            [5, null, 27, null, null, 59, 60, 79, null],
            [6, 16, null, 32, null, null, null, 76, 89],
            [8, null, null, 35, 44, null, null, 77, 82],
            [3, 12, null, null, 46, 53, null, null, 84],
            [1, null, 22, null, null, 57, 64, 74, null],
            [null, 17, null, 36, 45, 56, null, 75, null],
            [null, 10, 26, null, 49, null, 62, null, 85],
            [null, null, 28, 30, 42, null, 63, 72, null],
            [9, null, 24, 34, null, 52, 69, null, null]
        ]
    },
    {
        id: 14,
        title: 'Blue',
        color: '#3652AD',
        username: null,
        numbers: [
            [null, 14, 24, 33, null, 57, 63, null, null],
            [6, null, 23, null, 44, 53, null, null, 83],
            [null, 10, null, 38, null, 58, 65, null, 88],
            [3, 15, 26, null, 46, null, null, 70, null],
            [8, null, null, 36, null, 56, 68, null, 82],
            [5, 19, 27, null, 40, null, 69, null, null],
            [9, null, 21, 37, null, null, 60, null, 87],
            [4, 13, null, 30, 48, null, 66, null, null],
            [null, 17, 28, 31, 47, null, null, 71, null]
        ]
    },
    // {
    //     id: 15,
    //     title: 'Green',
    //     color: '#638889',
    //     username: null,
    //     numbers: [
    //         [7, 18, null, 30, 43, null, 67, null, null],
    //         [null, null, 21, 36, 49, null, 63, null, 84],
    //         [5, null, null, 34, null, 52, 64, 76, null],
    //         [null, 11, 26, 33, 47, null, null, 73, null],
    //         [9, null, 20, null, 40, null, 65, null, 87],
    //         [null, 17, 27, null, 46, 54, 66, null, null],
    //         [1, null, 24, 32, null, 59, null, 79, null],
    //         [8, 12, null, null, null, 51, null, 75, 82],
    //         [null, 16, null, 35, null, 53, 61, null, 89]
    //     ]
    // },
    // {
    //     id: 16,
    //     title: 'Orange',
    //     color: '#FF9843',
    //     username: null,
    //     numbers: [
    //         [4, 18, null, 37, null, null, 60, 70, null],
    //         [6, null, null, 35, 45, null, null, 71, 87],
    //         [null, 11, 24, null, 41, null, 61, null, 82],
    //         [null, 17, 29, null, 48, 53, null, null, 80],
    //         [null, 13, null, null, null, 51, 67, 73, 89],
    //         [5, 19, 23, null, null, 58, null, 78, null],
    //         [null, 16, null, 38, 42, null, 63, null, 85],
    //         [8, null, null, 36, 46, null, null, 77, 88],
    //         [1, null, 20, 34, null, 59, null, 76, null]
    //     ]
    // },
    // {
    //     id: 17,
    //     title: 'Dark Blue',
    //     color: '#365486',
    //     username: null,
    //     numbers: [
    //         [3, 18, null, 37, 40, null, 64, null, null],
    //         [1, null, 27, null, 49, 50, null, null, 80],
    //         [null, 19, 23, 36, null, null, 68, 75, null],
    //         [null, 12, null, null, 47, 54, null, 79, 89],
    //         [4, null, 21, 35, 48, null, null, null, 82],
    //         [null, null, 20, 34, null, 52, null, 74, 86],
    //         [null, 15, 26, null, null, 56, 63, null, 83],
    //         [8, null, null, 39, null, 53, null, 72, 87],
    //         [null, 13, 28, null, 43, 58, 65, null, null]
    //     ]
    // },
    // {
    //     id: 18,
    //     title: 'Pink',
    //     color: '#FF8F8F',
    //     username: null,
    //     numbers: [
    //         [null, 18, null, 32, 40, null, null, 77, 82],
    //         [null, null, 27, 34, 49, 50, null, 79, null],
    //         [3, null, null, 33, null, 52, null, 73, 89],
    //         [null, null, 25, 37, null, 58, 61, null, 81],
    //         [4, null, 24, null, 43, null, 63, null, 87],
    //         [8, null, 28, null, null, 51, null, 75, 86],
    //         [2, 11, null, 38, null, null, 64, null, 85],
    //         [6, 10, null, null, 47, 56, 69, null, null],
    //         [null, 12, 26, null, 44, null, 62, 74, null]
    //     ]
    // },
    // {
    //     id: 19,
    //     title: 'Purple',
    //     color: '#756AB6',
    //     username: null,
    //     numbers: [
    //         [1, 14, 21, null, null, null, 60, 74, null],
    //         [6, null, null, 38, null, 56, null, 77, 84],
    //         [2, 18, null, null, null, 51, null, 79, 87],
    //         [null, 15, 28, null, 45, null, 69, 70, null],
    //         [null, null, 22, 36, 48, 55, null, null, 85],
    //         [9, 12, null, null, 41, 53, null, 75, null],
    //         [5, 10, 23, null, null, null, 68, 78, null],
    //         [null, 13, 20, null, 43, 54, null, null, 83],
    //         [4, null, null, 30, 44, 59, null, null, 81]
    //     ]
    // },
    // {
    //     id: 20,
    //     title: 'Green',
    //     color: '#65B741',
    //     username: null,
    //     numbers: [
    //         [4, 18, null, null, 45, null, 64, null, 83],
    //         [null, 17, 25, null, null, 54, 65, 74, null],
    //         [null, 13, null, 32, 41, null, null, 75, 86],
    //         [5, null, 20, null, null, null, 67, 79, 82],
    //         [7, null, null, null, 42, 59, 66, 72, null],
    //         [null, 14, null, 39, 47, null, 68, null, 85],
    //         [null, 15, null, 31, null, 51, null, 77, 80],
    //         [3, null, 22, null, 48, 52, 60, null, null],
    //         [null, 19, 26, 38, null, 50, null, 73, null]
    //     ]
    // },
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
        micMuted: true
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
const updateBoardRoomMicMuted = (username, room, targetMicMuted) => {
    const currentIndex = exports.boards_room.findIndex(b => b.username === username && b.room === room);
    const newObject = Object.assign(Object.assign({}, exports.boards_room[currentIndex]), { micMuted: targetMicMuted });
    exports.boards_room.splice(currentIndex, 1, newObject);
};
exports.updateBoardRoomMicMuted = updateBoardRoomMicMuted;
///////////
// Code auto generate random board
// return random number from min to max and not includes in listNumberCheck
function getRandomInt(min, max, listNumbersCheck) {
    let randomTemp = 0;
    do {
        randomTemp = Math.floor(Math.random() * (max - min + 1)) + min;
    } while ((listNumbersCheck === null || listNumbersCheck === void 0 ? void 0 : listNumbersCheck.indexOf(randomTemp)) !== -1);
    return randomTemp;
}
const autoGenerateRandomBoard = () => {
    // init all random number from 1 to 90
    let listNumbers = new Array();
    // init all index list
    let listBoardIndexColumn = new Array([], [], [], [], [], [], [], [], []);
    // init board
    let board = [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null]
    ];
    do {
        // random number from 1 to 90 not called yet
        const ranNum = getRandomInt(1, 90, listNumbers);
        // loop 9 times, there are 9 columns in board
        for (let i = 0; i <= 8; i++) {
            // condition to match random number with exactly columns
            if (i * 10 <= ranNum && ranNum < i * 10 + 10) {
                const index = getRandomInt(0, 8, listBoardIndexColumn[i]);
                // condition: max number in columns is 5
                if (listBoardIndexColumn[i].length < 6) {
                    let boardRow = board[index];
                    const boardRowWithNumber = boardRow.filter(b => b !== null);
                    // condition: max number in rows is 5
                    if (boardRowWithNumber.length < 5) {
                        listBoardIndexColumn[i].push(index);
                        boardRow[i] = ranNum;
                        listNumbers.push(ranNum);
                    }
                }
            }
        }
        // condition: total 45 numbers in board, stop when the amount is fulfill
    } while (listNumbers.length < 45);
    console.log('hum', board);
    return board;
};
exports.autoGenerateRandomBoard = autoGenerateRandomBoard;
