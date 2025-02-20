import express from 'express';
import HTTP_CODES from './utils/httpCodes.mjs';
import log from './modules/log.mjs';
import { LOGG_LEVELS } from './modules/log.mjs';
import { startSession, updateSession } from './middleware/sessionMiddleware.mjs';
import tasksRouter from './routes/tasksRouter.js';

const ENABLE_LOGGING = true;  

const server = express();
const port = process.env.PORT || 5000;

const logger = log(LOGG_LEVELS.VERBOSE);

server.set('port', port);
server.use(express.json());  
server.use(logger);
server.use(startSession);
server.use(express.static('public')); 


server.use("/api/tasks", tasksRouter);

server.use(updateSession);

server.listen(server.get('port'), function () {
    console.log(`✅ Server running on http://localhost:${server.get('port')}`);
});

export default server;
