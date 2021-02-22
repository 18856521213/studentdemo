const userModel = require('../models/model/user.js')
const express = require("express")
const Bcrypt = require('bcrypt')
const router = express.Router();
const session = require('express-session')
router.use(session({
  secret:"this is session",
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge:1000*60*5,//表示过期日期
    secure:false,//为true只有https才能访问session
  }
}))
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
  userModel.find({userName:req.body.userName},(err,result)=>{
    if(!err){
      if(result.length > 0){
        Bcrypt.compare(req.body.password,result[0].password,(err,isMatch)=>{
          if(!err){
            if(isMatch){
              req.session.userName = "1"
              res.json({success:true,successManage:"登录成功"})
            }else{
              res.json({success:false,errMessage:"密码不正确"})
            }
          }
        })
      }else{
        res.json({errMessage:"用户不存在",success:false})
      }
    }else{
      res.json(err)
    }
  })
})

module.exports = router














