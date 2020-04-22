const fs = require('fs');

fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);

        // 将 String 转换成 Buffer 的方法
        console.log(Buffer.from(data, 'utf-8'));
    }
});

console.log('读取文件:');