const express = require('express');
const app = express();

const mw = function(req, res, next) {
    console.log('这是最简单的中间件函数');
    // 把流转关系，转交给下一个中间件或路由
    next();
}

// 全局中间件
app.use(mw);

app.use((req, res, next) => {
    console.log('简化全局中间件');
    next();
})

app.use((req, res, next) => {
    const time = Date();
    req.startTime = time;
    next();
})

app.get('/', (req, res) => {
    res.send('home page ' + req.startTime);
})

app.get('/user', (req, res) => {
    console.log('调用 user 路由');
    res.send('user page ' + req.startTime);
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})