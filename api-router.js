const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
    const query = req.query;
    res.send({
        status: 0, // 0 表示处理成功 1 表示处理失败
        msg: 'GET 请求成功',
        data: query
    })
})

router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0, // 0 表示处理成功 1 表示处理失败
        msg: 'POST 请求成功',
        data: body
    })
})

router.delete('/delete', (req, res) => {
    res.send({
        status: 0, // 0 表示处理成功 1 表示处理失败
        msg: 'DELETE 请求成功',
        data: '删除成功'
    })
})

module.exports = router;