'use strict';

const path = require('path');

// 当前目录的绝对路径
const workDir = path.resolve('.');

// 组合完整的文件路径
const filePath = path.join(workDir, 'public', 'index.html');

console.log(filePath);
