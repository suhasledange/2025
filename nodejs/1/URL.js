const URL = require('url')

const myurl = new URL('https://example.com:8080/path/name?query=hello#hash')
console.log('Host',myurl.host);
