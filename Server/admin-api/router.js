const express = require('express');
const router = express.Router();
//处理formData传过来的文件
const formidable  = require('express-formidable')
router.use('/batchAddStudentInfo',formidable(
    {
        encoding: 'utf-8',//编码
        uploadDir:__dirname + "/upload",//存储的文件地址
        multiples: true, //转为二维数组
        keepExtensions:true,//保留文件后缀名
    }
))

const handle = require('./handle')
//添加学生接口
router.post('/addStudent',handle.addStudent)
//查询学生接口
 router.post('/findStudent',handle.findStudent)

//删除学生
router.post('/deleteStudent',handle.deleteStudent)

//修改学生资料
router.post('/updateStudent',handle.updateStudent)
//下载模板
router.post('/uploadExcel',handle.uploadExcel)
//批量添加学生信息
router.post('/batchAddStudentInfo',handle.batchAddStudentInfo)
// 导出路由对象
module.exports = router