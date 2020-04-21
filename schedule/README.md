## 定时任务

定时任务简介：

在实际开发项目中，会遇到很多定时任务的工作。

比如：

* 定时导出某些数据
* 定时发送消息或邮件给用户
* 定时备份什么类型的文件

一般可以写个定时器，来完成相应的需求，在 Node 中自己实现也非常容易，我们使用 `node-schedule` 来完成定时任务。

安装：

```
npm i node-schedule --save
```

#### Cron风格定时器

使用：

```javascript
const schedule = require('node-schedule');

function scheduleCronstyle() {
    /**
     *    *    *    *    *    *
     ┬    ┬    ┬    ┬    ┬    ┬
     │    │    │    │    │    │
     │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
     │    │    │    │    └───── month (1 - 12)
     │    │    │    └────────── day of month (1 - 31)
     │    │    └─────────────── hour (0 - 23)
     │    └──────────────────── minute (0 - 59)
     └───────────────────────── second (0 - 59, OPTIONAL)
     */
    schedule.scheduleJob('*/1 * * * * *', function () {
        console.log('scheduleCronstyle:' + new Date());
    });
    
    // 范围触发：每分钟的1-10秒都会触发
    schedule.scheduleJob('1-10 * * * * *', function () {
        console.log('scheduleCronstyle:' + new Date());
    })
}

scheduleCronstyle();
```

* 6个占位符从左到右分别代表：秒、分、时、日、月、周几
* '*'表示通配符，匹配任意，当秒是'*'时，表示任意秒数都触发，其它类推

下面可以看看以下传入参数分别代表的意思：

```
每分钟的第30秒触发： '30 * * * * *'

每小时的1分30秒触发 ：'30 1 * * * *'

每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'

每月的1日1点1分30秒触发 ：'30 1 1 1 * *'

2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'

每周1的1点1分30秒触发 ：'30 1 1 * * 1'
```

#### 递归规则定时器

使用：

```javascript
const schedule = require('node-schedule');

function scheduleRecurrenceRule() {
    let rule = new schedule.RecurrenceRule();

    // rule.dayOfWeek = 2;
    // rule.month = 3;
    // rule.dayOfWeek = 1;
    // rule.hour = 1;
    // rule.minute = 42;
    rule.second = 0;

    schedule.scheduleJob(rule, function () {
        console.log('scheduleRecurrenceRule:' + new Date());
    });
}
```

每分钟第60秒时就会触发，其它规则可以看我注释中的代码，当然，也可以组合使用，达到需求效果！

#### 对象文本语法定时器

使用：

```javascript
const schedule = require('node-schedule');

function scheduleObjectLiteralSyntax(){

    //dayOfWeek
    //month
    //dayOfMonth
    //hour
    //minute
    //second

    // 代码实现的是每周一的下午16：11分触发，其它组合可以根据我代码中的注释参数名自由组合
    schedule.scheduleJob({hour: 16, minute: 11, dayOfWeek: 1}, function(){
        console.log('scheduleObjectLiteralSyntax:' + new Date());
    });
}

scheduleObjectLiteralSyntax();
```

#### 取消定时器

```javascript
const schedule = require('node-schedule');

function scheduleCanncel() {
    let counter = 1;

    const j = schedule.scheduleJob('* * * * * *', function () {
        console.log('定时器触发次数：' + counter);
        counter++;
    });

    setTimeout(function () {
        console.log('定时器取消');
        // 定时器对象的 cancel() 方法取消定时器
        j.cancel();
    }, 5000);
}

scheduleCanncel();
```

写在之后：

定时器功能大部分需求都可以借助 `node-schedule` 完成了，用它在项目中使用效果也不错，各种需求可以满足^_^!