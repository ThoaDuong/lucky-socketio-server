import express, { Express } from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { userRouter } from './src/api/users';
import { boardRouter } from './src/api/boards';
import { ioConfig } from './src/socket';

//static variable
const port = 8000;
const corsOptions = {
    origin: ['*', 'http://localhost:8080', 'http://lootoo.netlify.app', 'https://lootoo.netlify.app', 'http://lootoo.netlify.app/*', 'https://lootoo.netlify.app/*']
}

//global config
const app: Express = express();
const server = createServer(app);

//socket.io config
ioConfig(server, corsOptions);

//handle API
app.use(cors(corsOptions))
app.use(userRouter);
app.use(boardRouter);

server.listen(port, () => {
    console.log(`Listening Port: ${port}`);
});