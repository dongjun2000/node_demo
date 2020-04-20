## 与 MySQL 交互

安装 Node 与 MySQL 交互操作库：

```
npm i mysql --save
```

使用：

```javascript

const mysql = require('mysql');
const connection = mysql.createConnection({
    host    : 'localhost',
    database: 'test',
    root    : 'root',
    password: '123',
    port    : '3306',
});

connection.connect();

connection.query($sql, $params, function (err, result) {
    if (err) throw err;
});

connection.end();
```

结束数据库连接两个方法和区别：

* end()
    
    end()方法在 queries 都结束后执行，end()方法接收一个回调函数，queries执行出错，仍然会结束连接，错误会返回给回调函数 err 参数，可以在回调函数中处理。

* destory()

    比较暴力，没有回调函数，即刻执行，不管 queries 是否完成。
    
#### 数据库连接池：

注意：在实际开发过程中，应该使用连接池的方式！

连接池配置选项：

* waitForConnections
    
    当连接池没有连接或超出最大限制时，设置为true且会把连接放入队列，设置为false会返回error
    
* connectionLimit
    
    连接数限制，默认：10
    
* queueLimit

    最大连接请求队列限制，设置为0表示不限制，默认：0    

释放：

    调用 `connection.release()` 方法，会把连接放回连接池，等待其它使用者使用。

使用：

```javascript
const mysql = require('mysql');

// 创建连接池
const pool = mysql.createPool({
    host: 'localhost',
    database: 'test',
    user: 'root',
    password: '',
    port: '3306',
    connectionLimit: 10,
    queueLimit: 10,
    waitForConnections: true
});

// 共享连接
pool.getConnection(function (err, connection) {
    connection.query('select * from userinfo', function (err, result) {
        if (err) throw err;
        
        result.forEach(function (row) {
            console.log(row.id + ' - ' + row.username);
        });

        // 释放连接，放回连接池，
        connection.release();
    })
})
```


