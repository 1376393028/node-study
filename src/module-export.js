let a = 1;
function saya() {
    console.log(a);
}
console.log(module.exports === exports); //true

module.exports = { //导出以module.exports 为主
    a,
    saya
}

// module.exports指向了新对象后 export失效
let str = 'old';
exports.str = str;
console.log(module.exports === exports); //false

// exports也指向新对象
let str2 = 'new';
exports = module.exports;
exports.str2 = str2;