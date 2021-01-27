const express = require('express');
const app = express();
// 跨域
app.use(require('cors')())
// 处理 post 请求的数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/',(req,res)=>{
    res.send('请求完毕')
})
const PORT = 3007;
app.listen(PORT,()=>{
    console.log(`RUN IN: http://localhost:${PORT}`)
});