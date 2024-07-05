import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {AdminRouter} from './routes/auth.js';
import { connection } from './db.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));

app.use(cookieParser());

dotenv.config();

app.use('/auth', AdminRouter);


app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
})

connection();