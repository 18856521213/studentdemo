const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// 跨域
app.use(require('cors')())
// 处理 post 请求的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

app.get('/home',(req,res)=>{
    let name = {names:"dsd"}
    res.json(name)
})
app.post('/time',(req,res)=>{
    let name = {name:"dsd"}
    console.log(req.body)
    res.json(name)
})
const PORT = 3007;
app.listen(PORT,()=>{
    console.log(`RUN IN: http://localhost:${PORT}`)
});