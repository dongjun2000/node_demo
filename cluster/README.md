## cluster 集群 - 多进程

简介：

单个 Node.js 实例运行在单个线程中。 
为了充分利用多核系统，有时需要启用一组 Node.js 进程去处理负载任务。

Cluster 模块可以创建共享服务器端口的子进程。

多进程：

* 普通程序不能创建进程，只有系统进程才能创建进程
* 进程是分裂出来
* 分裂出来的两个进程执行的是同一套代码
* 父子进程之间可以共享"句柄"

#### 使用：

```javascript
const cluster = require('cluster');
const os = require('os');
const http = require('http');
const process = require('process');

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

    console.log('我是主进程');
} else {
    // console.log('我是子进程');
    const server = http.createServer((req, res) => {
        res.write('process id: ' + process.pid);
        res.end();
    });

    server.listen(3000);
    console.log('服务器开好了，在3000上');
}
```

#### 进程调度 --- 开销

多个进程：
第一个满了 -> 启用第二个进程(满了) -> 启用第三个进程

这是最高效的一种进程调度方式
