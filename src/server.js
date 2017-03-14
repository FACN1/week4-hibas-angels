var http = require('http');

var server = http.createServer();

server.listen(3000, function(){
  console.log("server is listing in 3000")
});
