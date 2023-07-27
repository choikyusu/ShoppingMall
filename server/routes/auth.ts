/* eslint-disable camelcase */
import * as express from "express";
import {db,User} from "../index";
import {trueTag} from "yaml/dist/schema/yaml-1.1/bool";

const router = express.Router();
const crypto = require('crypto');
router.use(express.json())

router.post("/signup", async (req, res) => {
  console.log(req.body)
  let userId = req.body.userId;
  let password = req.body.password;
  let userName = req.body.name;
  console.log(userId, password, userName );

 // password 암호화
 function passwordSha256(password : String) {
    const pass = crypto.createHash('sha256').update(password).digest('base64');
    return pass;
 }

 password = passwordSha256(password);

 console.log(password)
 // db에 저장
    try{
    const sql = "insert into user(userId, userPass, userName) values (?,?,?)";
    const valuse = [userId,password,userName]
    db.query(sql,valuse);

        res.json({msg : '가입성공'});
    }
    catch (e) {
        res.status(404).json({msg : '가입실패'});
    }
});

export default router;
