// 导入 http 模块
const http = require('http');

// 创建 http server，并传入回调函数
const server = http.createServer(function (request, response) {
    // 回调函数接收 request 和 response 对象
    // 获得 HTTP 请求的 method 和 url
    console.log(request.method + " : " + request.url);
    // 将 HTTP 响应 200 写入 response，同时设置 Content-Type: text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 将 HTTP 响应的 HTML 内容写入 response
    response.end('<h1>Hello Node!</h1>');
});

server.listen(3000, function () {
    console.log('Server is running at http://localhost:3000');
});