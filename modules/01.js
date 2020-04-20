let outputVal = 0;
let increment = 1;

function setOutputVal(val) {
    outputVal = val;
}

function setIncrement(incrementVal) {
    increment = incrementVal;
}

function printNextCount() {
    outputVal += increment;
    console.log(outputVal);
}

function printOutputVal() {
    console.log(outputVal);
}

exports.setOutputVal = setOutputVal;
exports.setIncrement = setIncrement;

module.exports.printNextCount = printNextCount;
