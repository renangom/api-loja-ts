import express from 'express';
import mongoose from 'mongoose';
import { appRouter } from './router';
import path from 'path'

const app = express();

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();

        app.use(express.json());
        app.use(appRouter);

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch(() => console.log('erro'));



