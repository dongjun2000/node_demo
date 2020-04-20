/**
 * event.once() 注册监听是一次性监听，当触发一次后，会移除该监听！
 * @type {EventEmitter|*}
 */

const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

emitter.once('some_events', function (foo, bar) {
    console.log('第1个监听事件，参数foo=' + foo, ', bar=' + bar);
});

console.log('第一轮');
emitter.emit('some_events', 'Willson', 'Zhong');

console.log('第二轮');

let isSuccess = emitter.emit('some_events', 'Willson', 'Zhong');

console.log(isSuccess);