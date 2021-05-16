var http = require('http');
var dt = require('./myfirstmodule')
const cl = require('./anothermodule')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write(cl.someText())
  res.end('Hello World!');
}).listen(8080);