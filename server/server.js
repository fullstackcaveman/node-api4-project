import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import { characters } from './data/characterData.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/api', (_req, res) => {
	res.json({ data: characters });
});

app.get('/', (_req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
