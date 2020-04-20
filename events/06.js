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

const listenerEventArr = emitter.listeners('some_events');

console.log(listenerEventArr.length);

for (let i = listenerEventArr.length - 1; i >= 0; i--) {
    console.log(listenerEventArr[i]);
}