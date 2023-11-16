"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const users_1 = require("./src/api/users");
const boards_1 = require("./src/api/boards");
const socket_1 = require("./src/socket");
//static variable
const port = 8000;
const corsOptions = {
    origin: ['http://localhost:8080']
};
//global config
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
//socket.io config
(0, socket_1.ioConfig)(server, corsOptions);
//handle API
app.use((0, cors_1.default)(corsOptions));
app.use(users_1.userRouter);
app.use(boards_1.boardRouter);
server.listen(port, () => {
    console.log(`Listening Port: ${port}`);
});
