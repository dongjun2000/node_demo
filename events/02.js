const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

emitter.on('some_events', function (foo, bar) {
    console.log('第1个监听事件，参数 foo=' + foo + ',bar=' + bar);
});

let isSuccess = emitter.emit('some_events', 'Wilson', 'Zhong');

emitter.on('some_events', function (foo, bar) {
    console.log('第2个监听事件，参数 foo=' + foo + ',bar=' + bar);
});

emitter.emit('some_events', 'zhong', 'wei');

let isSuccess2 = emitter.emit('other_events', 'Wilson', 'Zhong');

console.log(isSuccess);
console.log(isSuccess2);