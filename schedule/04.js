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