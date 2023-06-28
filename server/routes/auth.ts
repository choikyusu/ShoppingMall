/* eslint-disable camelcase */
import * as express from "express";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { userId, password, name } = req.body;

  console.log("test", req.body);
});

export default router;
