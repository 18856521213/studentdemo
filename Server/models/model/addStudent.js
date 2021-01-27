const mongoose = require('../index');

const addStudemt = mongoose.Schema({
  name: { type: String },
  studyID:{type: Number},
  age:{type: Number},
  born:{type: String},
  studentClass:{type: String},
  
})


module.exports = mongoose.model('Student', addStudemt,'student')
