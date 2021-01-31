const express = require('express');
const router = express.Router();

const student = require('../models/model/student.js')
//添加学生接口
router.post('/addStudent',(req,res)=>{
  console.log(req.body);
  let addS = new student(req.body)
    addS.save((err)=>{
    if(!err){
      res.json({
        success:true,
        seccessMessage:'添加成功'
      })
    }else{
      res.json({
        success:false,
        seccessMessage:'添加失败'+err
      })
    }
  })
})
//查询学生接口
router.post('/findStudent',(req,res)=>{
  let count = null;
  let filter = {
    name:{$regex:req.body.express.name},
    studyID:{$regex:req.body.express.studyID},
  }
  student.find(filter,(err,doc)=>{
    count = doc
  }).count()
  student.find(filter,(err,doc)=>{
    if(!err){
      let data = {
        success:true,
        data:doc,
        total:count,
        message:"查找学生列表成功"
      }
      res.json(data)
    }else{
      res.json({message:err,success:false})
    }
  }).skip(req.body.page.size*(req.body.page.current - 1)).limit(req.body.page.size)
})


// 导出路由对象
module.exports = router