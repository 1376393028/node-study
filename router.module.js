const express = require('express');
const app = express();
const router = require('./router/index.js');

// 注册路由模块
// app.use(router);
app.use('/api', router);

// app.use() 用于注册全局中间件

app.listen(80, () => {
    console.log('http://127.0.0.1');
})