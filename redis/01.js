const redis = require('redis');

// 返回一个 RedisClient 的对象
const client = redis.createClient({
    host: 'localhost',
    port: '6379',
    db: 1,
    auth_pass: 123
});

// 连接成功回调
client.on('connect', function () {
    // client.set('author', 'dongjun123', redis.print);
    client.get('author', redis.print);
    console.log('connect');
});

// 连接成功回调
client.on('ready', function (err) {
    console.log('ready');
});
