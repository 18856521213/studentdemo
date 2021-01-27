const express = require('express');
const router = express.Router();

const addStudemt = require('../models/model/addStudent.js')
router.post('/addStudent',(req,res)=>{
  let addS = new addStudemt({
    name: "王小明",
    studyID:237708,
    age:20,
    born:'1998.2.16',
    studentClass:'高二三班',
    })
    addS.save((err)=>{
    if(!err){
      res.json({
        success:true,
        seccessMessage:'添加成功'
      })
    }
  })
})



// 导出路由对象
module.exports = router