-- 通过 * 查询 users 表中所有列
-- select * from users;

-- 从 users 表中把 username 和 password 对应数据查询出来
-- select username, password from users;

-- 向 users 表中 插入新数据
-- insert into users (username, password) values ('tony stark', '098123');

-- 更新 users 表
-- update users set password='88888888' where id=4;
-- update users set username='admin123', password='123123' where id=5;

-- 删除表中数据行
-- delete from users where id=5;

-- 演示 where 
-- select * from users where id=1;
-- select * from users where id>2; 
-- select * from  users where username<>'xh';

-- 演示 and，or
-- select * from users where status=0 and id<3;
-- select * from users where status=1 or username='zs';

-- 演示 order by
-- select * from users order by status; -- 默认升序
-- select * from users order by status asc; -- 升序
-- select * from users order by id desc; -- 降序
-- select * from users order by status desc, username asc;

-- 演示 count(*)
-- select count(*) from users where status=0

-- 演示 as 为列设置别名
-- select count(*) as total from users where status=0;
-- select username as uname, password as upwd from users;
