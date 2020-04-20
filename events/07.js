const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

// 一个事件可以添加多个监听是没错，但Nodejs默认最大值是多少呢？ 10个，超过会有警告！
// .setMaxListeners(n) 可以设置
emitter.setMaxListeners(15);

for (let i = 10; i >= 0; i--) {
    emitter.on('some_events', function (foo, bar) {
        console.log('第' + (i + 1) + '个监听事件，参数 foo=' + foo + ',bar=' + bar);
    });
}

emitter.emit('some_events', 'Dong', 'Jun');