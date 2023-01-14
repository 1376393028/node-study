// 导入 mysql 模块
const mysql = require('mysql');
// 建立与 mysql 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    password: 'admin123', // 数据库的密码
    database: 'my_db_01' // 指定操作哪个数据库
})



// 查询 users 表中所有的数据
// const sqlStr = 'select * from users';
// db.query(sqlStr, (err, results) => {
//     if(err) return console.log(err.message);
//     // select 查询语句结果是数组
//     console.log(results); 
// })

// 插入数据
// const user = { username: 'Spider-Wan', password: 'pcc321' };
// const sqlStr = 'insert into users (username, password) values (?, ?)';
// db.query(sqlStr,[user.username, user.password], (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) return console.log('插入成功');
// }) 

// 插入数据的便捷方式
// const user = { username: 'Spider-Wan2', password: 'pcc4321' };
// const sqlStr = 'insert into users set ?';
// db.query(sqlStr, user, (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) return console.log('插入成功');
// })

// 更新数据
// const user = { id: 7, username: 'aaa', password: '000' };
// const sqlStr = 'update users set username=?, password=? where id=?';
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) return console.log('更新成功');
// })

// 更新数据便捷方法
// const user = { id: 7, username: 'aaaa', password: '0000' };
// const sqlStr = 'update users set ? where id=?';

// db.query(sqlStr,[user, user.id], (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) return console.log('更新成功');
// }) 

// 删除数据
// const sqlStr = 'delete from users where id=?';
// db.query(sqlStr, 6, (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) return console.log('删除成功');
// })

// 标记删除
// const sqlStr = 'update users set status=? where id=?';
// db.query(sqlStr, [1, 4], (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1) return console.log('标记删除成功');
// })

