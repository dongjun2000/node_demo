const fs = require('fs');

const data = 'Hello, Node.js';

// fs.writeFile(文件, 数据, 回调函数)
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});