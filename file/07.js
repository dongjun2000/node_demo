const fs = require('fs');

try {
    const stat = fs.statSync('test1.txt');
    console.log('isFile: ' + stat.isFile());
    console.log('isDirectory: ' + stat.isDirectory());

    if (stat.isFile()) {
        console.log('size: ' + stat.size);
        console.log('birth time: ' + stat.birthtime);
        console.log('modified time: ' + stat.mtime);
    }
} catch (e) {
    console.log(e.message);
}

