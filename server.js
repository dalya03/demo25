import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import { startSession, updateSession } from './modules/sessionMiddleware.mjs';  
import tasksRouter from './routes/tasksRouter.js';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

const server = express();
const port = process.env.PORT || 5000;

server.set('port', port);
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(startSession);  
server.use(express.static('public'));

// Attach DB Pool to Requests
server.use((req, res, next) => {
    req.db = pool;
    next();
});

server.use('/api/tasks', tasksRouter);
server.use(updateSession);  

server.listen(server.get('port'), () => {
    console.log(`✅ Server running on http://localhost:${server.get('port')}`);
});

export default server;
