import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signUpRouter } from './routes/signup';
import { signOutRouter } from './routes/signout';
import { errorHandler } from '@johnbutler/common';

const app = express();
app.use(json());

app.use(cookieSession({
  signed: false,
  secure: false
}));

app.set('trust proxy', true);

app.use(errorHandler);
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

export { app };