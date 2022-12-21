const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url;
    let fpath = '';
    if(url === '/') {
       fpath = path.join(__dirname, './clock/clock.html');
    } else {
        fpath = path.join(__dirname, './clock', url); 
    }
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if(!dataStr) return res.end('404 Not Found', err.message);
        res.end(dataStr);
    })
})

server.listen(8989, () => {
    console.log('server runing at http://127.0.0.1:8989');
})