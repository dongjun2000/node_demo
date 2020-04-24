'use strict';

const fs = require('fs');

const rs = fs.createReadStream('test.txt');
const ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);

rs.on('end', function () {
    console.log('读取END.');
});