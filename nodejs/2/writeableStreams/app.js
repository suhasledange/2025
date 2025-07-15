const fs = require('fs')

const writeAbleStream = fs.createWriteStream('output.txt')

writeAbleStream.write('Hello ')
writeAbleStream.write('World')
writeAbleStream.end()

writeAbleStream.on('finish',()=>{
    console.log('Finished writing to the file')
})


