const express = require('express');
const app =  express();

app.get('/user', (req, res) => {
    let data = {name: 'hui', age: 24, gender: '男'};
    res.send(JSON.stringify(data));
})

app.post('/user', (req, res) => {
    res.send('请求成功');
})

app.get('/', (req, res) => {
    // req.query 获取客户端发送的查询参数
    // 默认是一个空对象
    res.send(JSON.stringify(req.query));
})

// :id 是一个动态参数
app.get('/user/:id',(req, res) => {
    // req.params 获取动态参数
    // 默认是一个空对象
    res.send(JSON.stringify(req.params));
})

app.listen(80, () => {
    console.log('express server runing at http://127.0.0.1');
})


