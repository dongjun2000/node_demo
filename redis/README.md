## 与 Redis 交互

Redis 简介：

* 开源高性能 key-value 存储，采用内存中(in-memory)数据集的方式，也可以采用磁盘存储方式（前者性能高，但数据可能丢失，后者正好相反）

* 支持 strings、hashes、lists、sets、sorted sets 等，支持对复杂数据结构的高速操作

* 特性多，支持主从同步、pub/sub等

* 支持多语言客户端

安装 Node 与 Redis 交互库：

```
npm i redis --save
```

使用：

```javascript
const redis = require('redis');

// 返回一个 RedisClient 的对象
const client = redis.createClient({
    host: 'localhost',
    port: '6379',
    db: 1,
});

// 连接成功回调
client.on('ready', function (err) {
    console.log('ready');
});
```

认证：

redis 服务器默认不需要密码，不过这不太安全，我们肯定要设置一下密码。

打开 `redis.conf` 文件，找到 `requirepass`，取消注释，设置密码为：123

```
requirepass 123
```

然后重启 redis 服务器，再次利用上面的代码连接到 redis 服务器，出现错误提示：`NOAUTH Authentication required`

```javascript
const redis = require('redis');

// 返回一个 RedisClient 的对象
const client = redis.createClient({
    host: 'localhost',
    port: '6379',
    db: 1,
    auth_pass: 123
});
```

通过设置连接项中的 `auth_pass` 来通过认证。

auth_pass: 默认值为 null，默认情况下客户端将不通过 auth 命令连接，如果设置了此项，客户端将调用 auth 命令连接。

#### Redis 中的数据结构

字符串相关API：（01.js）

```javascript
client.set(key, value, [callback]);
client.get(key, [callback]);
```

onConnect：Redis的Connection事件之一。
redis.print：简便的回调函数，测试时显示返回值。

哈希相关API：(02.js)

```javascript
client.hmset(hash, obj, [callback]);
client.hmset(hash, key1, val1, ...keyn, valn, [callback]);
client.hgetall(hash, [callback]);
```

列表相关API：(03.js)

```javascript
client.sadd(key, value1, ...valuen, [callback]);
client.sismember(key, value, [callback]);
client.smembers(key, [callback]);
client.multi([commands]);
client.exec(callback);  
client.quit();
```
