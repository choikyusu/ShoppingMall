import express, { Request, Response } from 'express';
import next from 'next';
import userRouter from './routes/user';
import authRouter from './routes/auth';

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
const app = next({ dev, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api/user', userRouter);
  server.use('/api/kakao/auth', authRouter);

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    console.log('ready');
  });
});
