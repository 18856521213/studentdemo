const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// const session = require('express-session')
//引入管理后台的路由
const adminApi = require('./admin-api/router.js');
const User = require('./admin-api/User.js');
// 跨域
app.use(require('cors')())
//session中间件
// app.use(session({
//   secret:"this is session",
//   resave:false,
//   saveUninitialized:true,
//   cookie:{
//     maxAge:1000*60*5,//表示过期日期
//     secure:false,//为true只有https才能访问session
//   }
// }))
// 处理 post 请求的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//引入后台管理接口
app.use('/admin',adminApi);
app.use('/user',User);

const PORT = 3007;
app.listen(PORT,()=>{
    console.log(`RUN IN: http://localhost:${PORT}`)
});