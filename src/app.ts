import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { postRouter } from '../src/modules/post/route';

const app = express();
app.use(json());

app.use(postRouter);
app.use(errorHandler);

app.all('*', async () => {
  throw new NotFoundError();
});

export { app };
