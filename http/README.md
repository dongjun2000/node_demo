## HTTP 模块

Node 开发的目的就是为了用 JavaScript 编写 Web 服务器程序。

因为 JavaScript 实际上已经统治了浏览器端的脚本，其优势就是有世界上数量最多的前端开发人员。

#### HTTP 协议

要理解 Web 服务器程序的工作原理，首先，需要对 HTTP 协议有基本的了解。

#### HTTP 服务器

要开发 HTTP 服务器程序，从头处理 TCP 连接，解析 HTTP 是不现实的。这些工作实际上已经由 Node 自带的 http 模块完成了。
应用程序并不直接和 HTTP 协议打交道，而是操作 http 模块提供的 request 和 response 对象。

request 对象封装了 HTTP 请求，我们调用 request 对象的属性和方法就可以拿到所有 HTTP 请求的信息。

response 对象封装了 HTTP 响应，我们操作 response 对象的方法，就可以把 HTTP 响应返回给浏览器。

所以我们用 Node 实现一个 HTTP 服务器程序其实是非常简单：

```javascript
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
```

#### 文件服务器

让我们继续扩展一下上面的 Web 程序。我们可以设定一个目录，然后让 Web 程序变成一个文件服务器。

要实现这一点，我们只需要解析 request.url 中的路径，然后在本地找到对应的文件，把文件内容发送出去就可以了。

解析 URL 需要用到 Node 提供的 url 模块，它使用起来非常简单，通过 `parse()` 将一个字符串解析为一个 `Url` 对象：

```javascript
'use strict';

const url = require('url');

console.log(url.parse('http://user:pass@host.com:8899/path/to/file?query=string#hash'))
```

处理本地文件目录需要使用 Node 提供的 path 模块，它可以方便地构造目录：

```javascript
'use strict';

const path = require('path');

// 当前目录的绝对路径
const workDir = path.resolve('.');      

// 组合完整的文件路径
const filePath = path.join(workDir, 'public', 'index.html');

console.log(filePath);
```

使用 `path` 模块可以正确处理操作系统相关的文件路径。

最后我们实现一个文件服务器：

```javascript
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
```

没有必要手动读取文件内容。由于 response 对象本身是一个 `Writable Stream`，直接用 `pipe()` 方法就实现了自动读取文件内容并输出到 HTTP 响应。


