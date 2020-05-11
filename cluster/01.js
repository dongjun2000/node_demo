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
