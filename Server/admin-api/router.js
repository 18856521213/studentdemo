const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
  res.json({name:"dsa"});
})

router.post('/time',(req,res)=>{
  res.json({name:"dsa"});
})

// 导出路由对象
module.exports = router