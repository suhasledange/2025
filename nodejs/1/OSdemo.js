const os = require('os')

console.log('Platform',os.platform())
console.log('CPU arc:',os.arch())
console.log("Total Memory:",os.totalmem())
console.log("Free Memory:",os.freemem())