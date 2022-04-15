import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import logger from '../logger/logger';

const PORT = process.env.SERVER_PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ msg: 'Okay' });
});

app.listen(PORT, function () {
  logger(`Server started on port: ${PORT}`);
});
