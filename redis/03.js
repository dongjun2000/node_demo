const redis = require('redis');

const client = redis.createClient({
    host     : 'localhost',
    port     : 6379,
    db       : 1,
    auth_pass: 123,
});

client.on('ready', function () {
    console.log('ready');
});

client.on('end', function (err) {
    console.log('end');
});

client.on('connect', function () {
    const key = 'sets';
    client.sadd(key, 'C#');
    client.sadd(key, 'Nodejs');
    client.sadd(key, 'MySQL');

    client.multi()
        .sismember(key, 'C#')
        .smembers(key)
        .exec(function (err, replies) {
            console.log(replies);
            console.log('MULTI got ' + replies.length + ' replies');
            replies.forEach(function (reply, index) {
                console.log("Reply " + index + ": " + reply.toString());
            });
            client.quit();
        });
});
