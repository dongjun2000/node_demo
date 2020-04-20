var counter = require('./01');

console.log('第一次调用模块');

counter.setOutputVal(10);
counter.setIncrement(10);

counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

var counter = require('./01');

console.log('第二次调用模块');

counter.printNextCount();
counter.printNextCount();

