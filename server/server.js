import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import colors from 'colors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());

app.get('/', (_req, res) => {
	res.send('Api is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
			.bold
	)
);
