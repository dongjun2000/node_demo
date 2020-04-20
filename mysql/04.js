const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host           : 'localhost',
    database       : 'test',
    user           : 'root',
    password       : '',
    port           : '3306',
});

// 共享连接
pool.getConnection(function (err, connection) {
    if (err) throw err;

    connection.query('select * from userinfo', function (err, result) {
        if (err) throw err;

        result.forEach(function (row) {
            console.log(row.id + ' - ' + row.username);
        });

        // 释放连接，放回连接池，
        connection.release();
    });
});

pool.on('error', function (err) {
    console.log(err);
});


