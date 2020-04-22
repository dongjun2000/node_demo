const fs = require('fs');

fs.readFile('xiao.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');

        // 将二进制数据写入二进制文件
        fs.writeFile('output.jpg', data, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('ok.');
            }
        })
    }
});

console.log('读取二进制图片文件：');