const fs = require('fs');
const path = require('path');

const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr);
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    fs.writeFile(path.join(__dirname, './clock/clock.css'), newCSS, 'utf8', function(err) {
        if(err === null) return console.log('写入css成功');
        console.log('写入css失败', err.message);
    });
}

function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr);
    const newJS = r2[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile(path.join(__dirname, './clock/clock.js'), newJS, 'utf8', function(err) {
        if(err === null) return console.log('写入js成功');
        console.log('写入js失败', err.message);
    });
}

function resolveHTML(htmlStr) {
    let newHTML = htmlStr.replace(regStyle, "<link rel='stylesheet' href='./clock.css'></link>").replace(regScript, "<script src='./clock.js'></script>");
    fs.writeFile(path.join(__dirname, './clock/clock.html'), newHTML, 'utf8', function(err) {
        if(err === null) return console.log('写入html成功');
        console.log('写入html失败', err.message);
    })
}

function resolve(htmlStr) {
    resolveCSS(htmlStr);
    resolveJS(htmlStr);
    resolveHTML(htmlStr);
}

fs.readFile(path.join(__dirname, './index.html'), 'utf8', function(err, dataStr) {
    if(!dataStr) return console.log('读取HTML失败', err.message);
    resolve(dataStr);
});