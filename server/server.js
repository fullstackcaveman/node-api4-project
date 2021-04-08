import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import colors from 'colors';

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

// app.use('/', (_req, res) => {
// 	res.send('Api is running on /api...');
// });

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
			.bold
	)
);
