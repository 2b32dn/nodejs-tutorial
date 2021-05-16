const path = require('path');

console.log(path.sep)

const filePath = path.join('/01_built-in-modules','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, filePath)
console.log(absolute)