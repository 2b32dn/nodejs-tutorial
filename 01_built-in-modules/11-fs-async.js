const { readFile , writeFile } = require('fs'); // Asynchronous

console.log('start')
readFile('./01_built-in-modules/first.txt', 'utf8', (err, result) => {
  if(err){
    console.log(err)
    return;
  }
  const first  = result;
  readFile('./01_built-in-modules/first.txt', 'utf8', (err, result)=> {
    if(err){
      console.log(err)
      return;
    }
    const second = result;
    writeFile(
      './01_built-in-modules/result-async.txt',
      `No flag (a): ${first}, ${second}\n`,
      (err,result) => {
        if(err){
          console.log(err)
          return;
        }
        console.log('done with this task')
      }
    )
  })
});

console.log('starting next task')
// if no 'utf8', output -> <Buffer 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>