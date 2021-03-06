'use strict';

const fs = require('fs');

const ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用 Stream 写入文本数据...\n');
ws1.write('END.');
ws1.end();

const ws2 = fs.createWriteStream('output2.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));

ws2.write(Buffer.from('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(Buffer.from('END.', 'utf-8'));
ws2.end();