## 基本模块 

简介：

Node 是运行在服务端的 JavaScript 环境，服务器程序最大特点是没有浏览器的安全限制了，
而且，服务器程序必须能 接收网络请求，读写文件，处理二进制内容，
所以，Node 内置的常用模块就是为了实现基本的服务器功能。
这些模块在浏览器环境中是无法执行的，因为它们的底层代码是用 C/C++ 在 Node 运行环境中实现的。

#### global

node 中全局对象 global，浏览器中的全局对象 window

#### process

process 也是 Node 提供的一个对象，它代表当前 Node 进程。

JavaScript 程序是由事件驱动执行的单线程模型，Node 也不例外。

Node 不断执行响应事件的 JavaScript 函数，直到没有任何响应事件的函数可以执行时，Node 就退出了。

```javascript
// process.nextTick()将在下一轮事件循环中调用:
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');
```

这说明传入 `process.nextTick()` 的函数不是立刻执行，而是要等到下一次事件循环。

Node 进程本身的事件就由 process 对象来处理。如果我们响应 exit 事件，就可以在程序即将退出时执行某个回调函数：

```javascript
// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
```

#### 判断JavaScript执行环境

有很多 JavaScript 代码既能在浏览器中执行，也能在 Node 环境执行，但有些时候，程序本身需要判断自己到底是在什么环境下执行的，常用的方式就是根据浏览器和 Node 环境提供的全局变量名称来判断：

```javascript
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
```