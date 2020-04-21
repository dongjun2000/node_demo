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

scheduleRecurrenceRule();