const student = require('../models/model/student.js')
const dayjs = require('dayjs')
const sheet = require('node-xlsx')
module.exports = {
  //查找学生
  async findStudent(req,res){
    console.log("我被执行了");
    let filter = {
      name:{$regex:req.body.express.name},
      studyID:{$regex:req.body.express.studyID},
    }
  
    let count = await student.countDocuments(filter)
    if(count != 0){
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
    }else{
      let data = {
        success:true,
        data:[],
        total:0,
        message:"查找学生列表成功"
      }
      res.json(data)
}
  
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
      }
    })
  },
  //下载文件
  uploadExcel(req,res){
    res.download(__dirname+"/public/model.xlsx","学生信息模板.xlsx",(err)=>{})
  },
  //批量添加学生
  async  batchAddStudentInfo(req,res,next){
    const data = sheet.parse(req.files.file.path)
    for(let i = 1;i<=data[0].data.length-1;i++){
        let studentData = {
            name:data[0].data[i][0],
            studyID:data[0].data[i][1],
            age:data[0].data[i][2],
            born:data[0].data[i][3],
            studentClass:data[0].data[i][4],
            sex:data[0].data[i][5],
            fatherName:data[0].data[i][6],
            matherName:data[0].data[i][7],
            address:data[0].data[i][8],
            createTime:dayjs().format('YYYY-MM-DD HH:mm:ss')
        }
        let addManyStudentInfo = new student(studentData)
        await addManyStudentInfo.save((err)=>{
          if(err){ return }
       })

      }
      res.json({success:true,message:"批量添加成功"})
  }
}