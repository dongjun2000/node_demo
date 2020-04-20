/**
 * 更新
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

let userModSql = 'update userinfo set username = ?, userpass = ? where id = ?';
let userModSql_Params = ['小花', '123', '1'];

connection.query(userModSql, userModSql_Params, function (err, result) {
    if (err) {
        console.log('[Update Error] - ', err.message);
        return;
    }
    console.log('----------------------------INSERT----------------------------');
    console.log('Update affectedRows', result.affectedRows);
    console.log('--------------------------------------------------------------');
});

connection.end();
