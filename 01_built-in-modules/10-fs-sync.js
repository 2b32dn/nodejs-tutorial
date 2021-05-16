const { readFileSync , writeFileSync } = require('fs'); // Synchronous (blocking)

console.log('start')

const first = readFileSync('./01_built-in-modules/first.txt', 'utf8')
console.log(first)

const second = readFileSync('./01_built-in-modules/second.txt', 'utf8')
console.log(second)

writeFileSync(
  './01_built-in-modules/result-sync.txt', 
  `With flag (a): ${first}, ${second}\n`,
  {
    flag: 'a' // append
  }
)

console.log('done with this task')
console.log('starting the next one')


// node is reading this file line by line executing whatever as it goes.