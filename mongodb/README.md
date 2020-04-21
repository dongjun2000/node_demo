## 与 MongoDB 交互

MongoDB 简介：

* 开源、高性能的文档型 NoSQL 数据库；
* 支持索引、集群、复制和故障转移、各种语言的驱动程序；
* 高伸缩性

mac 下启动 MongoDB：

```
mongod --config=/etc/mongodb.conf
```

mongodb.conf 配置文件：

```
port=27017
dbpath=/usr/local/etc/mongodb/data/
logpath=/usr/local/etc/mongodb/log/mongodb.log
fork=true
```

MongoDB 的命令简单说明：

* mongo ：客户端
* mongod ： 服务端
* mongodump ： 备份工具
* mongorestore ： 恢复工具
* mongoexport ：导出工具
* mongoimport ：导入工具
* mongostat  ： 实时性能监控工具
* mongotop   ： 跟踪 MongoDB 实例读写时间工具

安装 Node 与 MongoDB 交互库：

```
npm i mongoose --save
```

使用：

```javascript
const mongoose = require('mongoose');

// 连接数据库
// test：表示数据库
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 定义 Schema
const kittySchema = mongoose.Schema({
    name: String,
});

// 添加方法
kittySchema.methods.speak = function () {
    let greeting = this.name ? 'Neow name is ' + this.name : "I don't have a name";
    console.log(greeting);
};

// 定义 model
// mongoose.model('文档名', Schema);
const Kitten = mongoose.model('Kitten', kittySchema);
```

增：

```javascript
// 实例化 model
const felyne = new Kitten({name: 'Felyne'});

// 调用方法
felyne.speak();

// 保存到数据库
felyne.save(function (err, felyne) {
    if (err) return console.error(err);
    felyne.speak();
});
```

查：

```javascript
// 查询所有数据，获取的是一个数组
Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});

// 查询一条数据，获取的是一个对象
Kitten.findOne(function (err, kitten) {
    if (err) return console.error(err);
    console.log(kitten);
});

// 查询指定条件的数据，获取所有 name 为 "F" 开头的数据
Kitten.find({ name: /^F/}, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});
```

@更多文档：http://www.mongoosejs.net/docs/guide.html