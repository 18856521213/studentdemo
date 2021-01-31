const mongoose = require('../index');
//定义添加学生的数据结构
const addStudemt = mongoose.Schema({
  name: { type: String },
  studyID:{type: String},
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

})


module.exports = mongoose.model('Student', addStudemt,'student')
