const mysql = require('mysql');

const connection = mysql.createConnection({
    host    : 'localhost',
    database: 'test',
    user    : 'root',
    password: '',
    port    : 3306,
});

connection.connect(function (err) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect] success!');
});

connection.query('select 1 + 1 AS solution', function (err, rows, fields) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('The solution is: ', rows[0].solution);
});

connection.query('select * from article', function (err, rows) {
    if (err) throw err;

    // rows.forEach(function (row) {
    //     console.log(row.id + ' - ' + row.title);
    // });

    for (let row of rows) {
        console.log(row.id + ' - ' + row.title);
    }
});

connection.end(function (err) {
    if (err) {
        return;
    }
    console.log('[connection end] success!');
});