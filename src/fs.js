const fs = require('fs');

//参数1 写入文件的路径 
//参数2 写入文件的内容 
//参数3（可选） 写入文件内容的编码格式
//参数4 写入文件的回调函数
fs.writeFile('./src/index.js', "console.log('这是我写入的内容');", function(err) {
    // 写入成功会覆盖文件内原本的内容 
    if(!err) return console.log('写入成功', err);
    console.log('写入失败', err.message);
})
fs.writeFile('./src/create.js', "console.log('这是我创建的文件');", function(err) {
    // 写入一个错误路径，文件名不存在会创建文件并写入，文件名前面的路径错了会报错，例如：./errname/index.js
    if(!err) return console.log('写入成功', err);
    console.log('写入失败', err.message);
})

//参数1 读取文件的路径 
//参数2（可选） 读取文件时采用的编码格式
//参数3 读取文件的回调函数，返回读取失败或成功结果
fs.readFile('./src/index.js', 'utf8', function(err, dataStr) {
    //读取成功 err为null, 读取失败 dataStr为undefined
    if(!dataStr) return console.log('读取失败', err.message); 
    console.log('读取成功', dataStr);
})

// __dirname表示当前文件所处的目录
fs.readFile(__dirname + '/assets/old.txt', 'utf8', function(err, dataStr) {
    if(dataStr) {
        let str = dataStr.replace(/=/g, ':').replace(/,/g, '\r\n');
        fs.writeFile(__dirname + '/assets/new.txt', str, 'utf8', function(err) {
            if(!err) return console.log('写入成功');
            console.log('写入失败', err.message);
        })
    }else {
        console.log('读取失败', err.message);
    }
})