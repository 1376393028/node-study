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

const mw1 = (req, res, next) => {
    console.log('调用了局部中间件mw1');
    next();
}

const mw2 = (req, res, next) => {
    console.log('调用了局部中间件mw2');
    next();
}

// 中间件一定要在路由之前注册
// 客户端发送过来的请求，可以连续调用多个中间件进行处理
// 执行完中间件，不要忘记调用next()函数
// next()后不要再写额外的代码
// 多个中间件之间，共享req对象和res对象

app.get('/', mw1, mw2, (req, res) => {
    res.send('home page ' + req.startTime);
})

app.get('/user', [mw1, mw2], (req, res) => {
    console.log('调用 user 路由');
    res.send('user page ' + req.startTime);
})

app.get('/err', (req, res) => {
    throw new Error('服务器发生错误！');
    res.send('home page');
})

// 错误级中间件必须在路由之后 
app.use((err, req, res, next) => {
    console.log('发生了错误', err.message);
    res.send('error ' + err.message);
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})