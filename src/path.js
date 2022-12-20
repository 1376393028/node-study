const path = require('path');

const pathJoin = path.join('/a/', '/b/c', '../', './d', 'e');
console.log('pathJoin', pathJoin);


const pathJoin2 = path.join(__dirname, './index.js');
const pathJoin3 = path.join(__dirname, './assets/new.txt');
console.log('pathJoin2', pathJoin2);
console.log('pathJoin3', pathJoin3);

const fileName = path.basename(pathJoin2);
console.log('fileName', fileName);

const fileName2 = path.basename(pathJoin2, '.js');
console.log('fileName2', fileName2);

const ext = path.extname(pathJoin2);
console.log('ext', ext);
const ext2 = path.extname(pathJoin3);
console.log('ext2', ext2);