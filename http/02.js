'use strict';

const url = require('url');

console.log(url.parse('http://user:pass@host.com:8899/path/to/file?query=string#hash'))