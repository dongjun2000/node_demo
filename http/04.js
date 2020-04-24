'use strict';

const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');

// 从命令行参数获取 root 目录，默认是当前目录
// path.resolve() 获取的是绝对路径
const root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

const server = http.createServer(function (request, response) {
    // 获取 URL 的 path，类似 '/css/bootstrap.css'
    const pathname = url.parse(request.url).pathname;
    // 获取对应的本地文件路径
    const filepath = path.join(root, pathname);

    // 获取文件状态
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    })

});

server.listen(3000);
