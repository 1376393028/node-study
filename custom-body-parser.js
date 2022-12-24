const qs = require('Qs');


// 自定义中间件
const bodyParser = (req, res, next) => {
    // 定义解析表单数据的中间件
    // 定义一个 str 字符串，专门用来存储客户发送的请求体数据
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })
    // 监听 req 的 end 事件
    req.on('end', () => {
        // TODO: 把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str);
        req.body = body;
        next();
    })
}

module.exports = bodyParser;