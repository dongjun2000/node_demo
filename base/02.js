// process 也是 Node 提供的一个对象，它代表当前 Node 进程。

// console.log(process);

console.log(process.version);

console.log(process.platform);

console.log(process.arch);

console.log(process.cwd());

process.chdir('/');

console.log(process.cwd());

console.log(process.pid);

setTimeout(() => {}, 50000);

// console.log(global.process === process);