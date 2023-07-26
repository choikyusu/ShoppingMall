import express, { Request, Response } from 'express';
import next from 'next';
import userRouter from './routes/user';
import authRouter from './routes/auth';
import loginRouter from './routes/login';
import router from "./routes/user";

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
const app = next({ dev, port });

const handle = app.getRequestHandler();
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '1234',
  database : 'shoppingMall'
});

db.connect();

app.prepare().then(() => {
  const server = express();


  server.use('/api/user', userRouter);
  server.use('/api/kakao/auth', authRouter);
  server.use('/api/kakao/login', loginRouter);

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    console.log('ready');
  });
});

export default db;