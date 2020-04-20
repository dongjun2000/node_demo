const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

emitter.on('some_events', function (foo, bar) {
    console.log('第1个监听事件，参数 foo=' + foo + ',bar=' + bar);
});

console.log('第一轮');
emitter.emit('some_events', 'Wilson', 'Zhong');

console.log('第二轮');
emitter.emit('some_events', 'Wilson', 'Z');
