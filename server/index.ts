import express, { Request, Response } from "express";
import next from "next";
import userRouter from "./routes/user";

const dev = process.env.NODE_ENV === "development";
const port = 3000;
const app = next({ dev, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/api/user", userRouter);

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    console.log("ready");
  });
});
