const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

// 静态文件
app.use('/public', express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

// 设置模板引擎
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// parser application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: false}));

// parser application/json
// app.use(bodyParser.json());

// parser multipart/form-data
let upload = multer({dest: 'uploads/'});
app.use(upload.any());

app.post('/profile', function (req, res) {
    // console.log(req.body);
    // console.log(req.files);
    let data = [];
    for (file of req.files) {
        data.push(file.filename)
    }
    console.log(data);
    res.json(data);
});

app.listen(3000);
