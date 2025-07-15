const fs = require('fs')

const readableStream = fs.createReadStream("example.txt")

const writeableStream = fs.createWriteStream('example-output.txt')

readableStream.pipe(writeableStream)

writeableStream.on('finish',()=>{
    console.log('File Copied successfully')
})