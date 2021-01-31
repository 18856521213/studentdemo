const mongoose = require('../index');
//定义添加学生的数据结构
const addStudemt = mongoose.Schema({
  name: { type: String },
  studyID:{type: Number},
  age:{
    type: Number
  },
  born:{type: String},
  studentClass:{type: String},
  sex:{
    type:Number,
    default:0,
    enum:[0,1]
  },
  fatherName:{type:String},
  matherName:{type:String},
  address:{type:String},

})


module.exports = mongoose.model('Student', addStudemt,'student')
