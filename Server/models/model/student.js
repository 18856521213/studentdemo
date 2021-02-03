const mongoose = require('../index');
const dayjs = require('dayjs')
//定义添加学生的数据结构
const addStudemt = mongoose.Schema({
  name: { 
    type: String,
    index:true 
  },
  studyID:{
    type: String,
    index:true
  },
  age:{
    type: String
  },
  born:{type: String},
  studentClass:{type: String},
  sex:{
    type:String,
    default:'0',
    enum:['0','1']
  },
  fatherName:{type:String},
  matherName:{type:String},
  address:{type:String},
  createTime:{
    type:String,
    default:dayjs().format('YYYY-MM-DD HH:mm:ss')
  }

})


module.exports = mongoose.model('Student', addStudemt,'student')
