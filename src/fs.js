const fs = require('fs');
//参数1 读取文件的路径 
//参数2（可选） 读取文件时采用的编码格式
//参数3 读取文件的回调函数，返回读取失败或成功结果
fs.readFile('./src/index.js', 'utf8', function(err, dataStr) {
    //读取成功 err为null, 读取失败 dataStr为undefined
    if(!dataStr) {
        return console.log('读取失败', err.message);
    } 
    console.log('读取成功');
})