import express from 'express';
import dotenv from 'dotenv';
import { connection } from './db';

const app = express();
dotenv.config();


app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
})

connection();