const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
    //req.url 客户端请求的地址
    const url = req.url;
    //req.method 客户端请求的 method 类型
    const method = req.method;
    const str =  `Your request url is ${url}, and request method is ${method}。测试中文乱码`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(str);
})

server.listen(8888, () => {
    console.log('server runing at http://127.0.0.1:8888');
})