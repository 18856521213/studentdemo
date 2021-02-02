const student = require('../models/model/student.js')
const dayjs = require('dayjs')
module.exports = {
  //查找学生
  async findStudent(req,res){
    let filter = {
      name:{$regex:req.body.express.name},
      studyID:{$regex:req.body.express.studyID},
    }
  
    let count = await student.countDocuments(filter)
    student.find(filter,{__v:0,_id:0},(err,doc)=>{
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
    }).sort({createTime:-1}).skip(req.body.page.size*(req.body.page.current - 1)).limit(req.body.page.size)
  
  },
  //添加学生
  addStudent(req,res){
    req.body.createTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
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
  },
  //删除学生
  deleteStudent(req,res){
    student.deleteOne(req.body,(err,result)=>{
      if(!err){
        res.json({success:true,message:"删除成功"})
      }else{
        res.json({success:false,message:"删除失败"})

      }
    })
  },
  //修改学生信息
  updateStudent(req,res){
    student.updateOne({studyID:req.body.studyID},req.body,(err,result)=>{
      if(!err){
        res.json({success:true,message:"修改成功"})
      }else{
        res.json({success:false,message:err})

        // console.log(err);
      }
    })
  },
  //下载文件
  uploadExcel(req,res){
    res.download(__dirname+"/public/model.xlsx","模板.xlsx",(err)=>{})
  }
}