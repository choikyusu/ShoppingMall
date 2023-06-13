import express from "express";

const router = express.Router();

router.route("/").get((req, res, next) => {
  try {
    res.json({ name: "test", userId: "test01" });
  } catch (err) {
    console.error(err);
  }
});

export default router;
