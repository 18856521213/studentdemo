const express = require('express');
const router = express.Router();

const handle = require('./handle')
//添加学生接口
router.post('/addStudent',handle.addStudent)
//查询学生接口
 router.post('/findStudent',handle.findStudent)

//删除学生
router.post('/deleteStudent',handle.deleteStudent)

//修改学生资料
router.post('/updateStudent',handle.updateStudent)
// 导出路由对象
module.exports = router