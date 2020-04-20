/**
 * 增
 */

const mysql = require('mysql');

const connection = mysql.createConnection({
    host    : 'localhost',
    database: 'test',
    user    : 'root',
    password: '',
    port    : 3306
});

connection.connect();

let userAddSql = 'insert into userinfo(id, username, userpass) values(null, ?, ?)';
let userAddSql_Params = ['zhangsan', '123'];

// 增
connection.query(userAddSql, userAddSql_Params, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------INSERT-----------------------------');
    console.log('Insert ID:', result.insertId);
    console.log('-------------------------------------------------------------');
});

connection.end();