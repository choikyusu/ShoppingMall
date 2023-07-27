import express from "express";
import {db,User} from "../index";
const router = express.Router();

// interface User{
//   userId: String;
//   userPass: String;
//   userName: String;
// }


router.route("/").get((req, res, next) => {

  db.query('select * from shoppingMall.`user`',(error : String, result : User[])=>{
    if(error){
      console.log("에러")
    }
    res.json({result});
    console.log(result)
  })
  // db.end()


});

export default router;
