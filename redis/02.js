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

client.on('connect', function () {
    client.hmset('short', {'js': 'JavaScript', 'C#': 'C Sharp'}, redis.print);

    client.hmset('short', 'SQL', 'Structured Query Language', 'HTML', 'HyperText Mark-up Language', redis.print);

    client.hgetall('short', function (err, res) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }
        console.dir(res);
    });

    console.log('connect');
});
