const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

// 监听器
const listener = function (foo, bar) {
    console.log('第1个监听事件，参数foo=' + foo, ', bar=' + bar);
};

const listener2 = function (foo, bar) {
    console.log('第2个监听事件，参数foo=' + foo, ', bar=' + bar);
};

const listener3 = function (foo, bar) {
    console.log('第3个监听事件，参数foo=' + foo, ', bar=' + bar);
};

// 绑定事件监听，可以绑定多个事件监听
// .on(事件名，监听器)
emitter.on('some_events', listener);
emitter.on('some_events', listener2);
emitter.on('some_events', listener3);

// 移除事件监听器
// .removeListener(事件名, 监听器)
emitter.removeListener('some_events', listener);
emitter.removeListener('some_events', listener3);

// 触发事件
// .emit(事件名)
emitter.emit('some_events');