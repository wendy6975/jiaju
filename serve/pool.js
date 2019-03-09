//1.引入mysql库
const mysql=require("mysql");
//2.创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jj",
    port:3306,
    connectionLimit:20
});
//3.导出连接池对象
module.exports=pool;
