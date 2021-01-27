const express = require('express');
const app = express();
const bodyParser = require('body-parser')
//引入管理后台的路由
const adminApi = require('./admin-api/router.js');
// 跨域
app.use(require('cors')())
// 处理 post 请求的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//引入后台管理接口
app.use('/admin',adminApi);

const PORT = 3007;
app.listen(PORT,()=>{
    console.log(`RUN IN: http://localhost:${PORT}`)
});