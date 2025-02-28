import express from 'express';
import { startSession, updateSession } from './modules/sessionMiddleware.mjs';
import tasksRouter from './routes/tasksRouter.js';

const server = express();
const port = process.env.PORT || 5000;

server.set('port', port);

server.use(express.json());
server.use(startSession);
server.use(express.static('public'));

server.use('/api/tasks', tasksRouter);

server.use(updateSession);

server.listen(server.get('port'), () => {
    console.log(`✅ Server running on http://localhost:${server.get('port')}`);
});

export default server;
