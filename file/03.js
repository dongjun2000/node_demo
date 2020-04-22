// 同步读取文本文件
const fs = require('fs');

try {
    let data = fs.readFileSync('test.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
}
