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

// 实例化 model
// const felyne = new Kitten({name: 'Felyne'});
//
// // 调用方法
// felyne.speak();
//
// // 增
// felyne.save(function (err, felyne) {
//     if (err) return console.error(err);
//     felyne.speak();
// });

// 查
Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});

Kitten.findOne(function (err, kitten) {
    if (err) return console.error(err);
    console.log(kitten);
});

// 获取所有 name 为 "F" 开头的数据
Kitten.find({ name: /^F/}, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});