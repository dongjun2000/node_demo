// Cron风格定时器

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

    schedule.scheduleJob('1-10 * * * * *', function () {
        console.log('scheduleCronstyle:' + new Date());
    })
}

scheduleCronstyle();