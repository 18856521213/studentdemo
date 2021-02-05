const userModel = require('../models/model/user.js')
const express = require("express")
const router = express.Router();
router.post('/addUser',(req,res)=>{
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
})

module.exports = router














