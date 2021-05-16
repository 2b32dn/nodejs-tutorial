const http = require('http')

const server = http.createServer((req, res)=> {
  if (req.url === '/'){
    res.write('Jeonyul')
    res.end()

    // res.end('Jeonyul')
  }
  if (req.url === '/about'){
    res.end("Asuka Kishi")
  }
  res.end(
    `<h1> Oops, no resources on this page</h1>`
  )
})

server.listen(8888, ()=> console.log('Listening on Port 8888'))
