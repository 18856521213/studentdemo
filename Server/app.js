const express = require('express');
const app = express();
// 跨域
app.use(require('cors')())
// 处理 post 请求的数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = 3007;
const aa = "做几个实验";
app.listen(PORT,()=>{
    console.log(`RUN IN: http://localhost:${PORT}`)
});