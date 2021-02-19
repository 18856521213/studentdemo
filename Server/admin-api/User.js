const userModel = require('../models/model/user.js')
const express = require("express")
const router = express.Router();
//用户注册
router.post('/addUser',(req,res)=>{
  userModel.find({userName:req.body.userName},(err,result)=>{
    if(!err){
      if(result.length == 0){
        let user = new userModel(req.body)
        user.save((err)=>{
            if(!err){
                res.json({
                  success:true,
                  seccessMessage:'注册成功'
                })
              }else{
                res.json({
                  success:false,
                  seccessMessage:'注册失败'+err
                })
              }
            })
          }else{
          res.json({success:false,errMessage:"用户已注册"})
      }
    }
  })
})
//用户登录
router.post('/logonUser',(req,res)=>{
  console.log(req.body);
  userModel.find({userName:req.body.userName},(err,result)=>{
    if(!err){
      console.log(result);
      if(result.length > 0){
        res.json({success:true})
      }else{
        res.json({errMessage:"用户不存在",success:false})
      }
    }else{
      res.json(err)
    }
  })
})

module.exports = router














