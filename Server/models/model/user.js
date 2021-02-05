const mongoose = require('../index');
const dayjs = require('dayjs')
const Bcrypt = require('bcrypt')
const addUser = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        set(parmsa){
            return Bcrypt.hashSync(parmsa,10)
        }
    },
    createTime:{
        type:String,
        default:dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
})

module.exports = mongoose.model('User', addUser,'user')