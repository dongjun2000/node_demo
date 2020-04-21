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