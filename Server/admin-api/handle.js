const student = require('../models/model/student.js')
module.exports = {
  //查找学生
  async findStudent(req,res){
    let filter = {
      name:{$regex:req.body.express.name},
      studyID:{$regex:req.body.express.studyID},
    }
  
    let count = await student.countDocuments(filter)
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
  
  },
  //添加学生
  addStudent(req,res){
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
    student.updateOne(req.body.studyID,req.body,(err,result)=>{
      if(!err){
        res.json({success:true,message:"修改成功"})
      }
    })
  }
}