import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import logger from '../logger/logger';
import createConnection from '../typeorm';
import handlerError from '../middlewares/handlerError';
import routes from './routes';

createConnection()
  .then(function () {
    const PORT = process.env.SERVER_PORT || 8000;

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use(routes);

    app.use(handlerError);

    app.listen(PORT, function () {
      logger(`Server started on port: ${PORT}`);
    });
  })
  .catch(function (e) {
    logger(e);
  });
