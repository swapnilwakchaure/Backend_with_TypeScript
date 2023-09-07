import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import expressWinston from 'express-winston';
const port = process.env.port || 8080;
import { connection } from './controllers/connect.js';
import { eventRoute } from './routes/route.js';
import { logger } from './logger/logger.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true
}));
app.get('/', (request, response) => {
    response.status(200).send('Welcome to Event Management App');
});
app.get('/400', (request, response) => {
    response.send(400);
});
app.get('/500', (request, response) => {
    response.send(500);
});
app.use('/create', eventRoute);
app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is runnig at port ${port}`);
    }
    catch (error) {
        console.log(`Cannot able to start the server ${error}`);
    }
});
