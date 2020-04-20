let counter = 0;

exports.printNextCount = function () {
    coutner += 2;
    console.log(counter);
};

var isEq = (exports === module.exports);

console.log(isEq);