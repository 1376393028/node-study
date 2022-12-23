const express = require('express');
const app = express();

// 托管静态资源
// http://127.0.0.1/clock.html
app.use(express.static('./src/clock-test/clock'));
// 添加前缀
// http://127.0.0.1/public/index.html
app.use('/public',express.static('./src/clock-test'));

app.listen(80, () => {
    console.log('express server runing at http://127.0.0.1');
})