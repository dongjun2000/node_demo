const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

// 监听器
const listener = function (foo, bar) {
    console.log('第1个监听事件，参数 foo=' + foo + ',bar=' + bar);
};

const listener2 = function (foo, bar) {
    console.log('第2个监听事件，参数 foo=' + foo + ',bar=' + bar);
};

// 绑定事件
emitter.on('some_events', listener);
emitter.on('some_events', listener2);
emitter.on('other_events', function (foo, bar) {
    console.log('其它监听事件，参数 foo=' + foo + ',bar=' + bar);
});

/**
 * 移除（指定事件）所有监听器
 * .removeListener('事件名')
 * '事件名' 是可选参数，可以移除所有监听事件（比较暴力的方法一般慎用~~~）
 */
emitter.removeAllListeners('some_events');

emitter.emit('some_events', 'Wilson', 'Zhong');

emitter.emit('other_events', 'Wilson', 'Zhong');