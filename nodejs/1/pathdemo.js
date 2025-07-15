const path = require('path')

const directory = 'user/local'
const fileName = 'example.txt'

const fullpath = path.join(directory,fileName)

console.log(fullpath)