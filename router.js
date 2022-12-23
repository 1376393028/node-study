const express = require('express');
const app = express();

// 路由挂载到 app 上
app.get('/', (req, res) => {
    res.send('hello get');
})

app.post('/', (req, res) => {
    res.send('hello post');
})

app.listen(80, () => {
    console.log('server runing at http://127.0.0.1');
})