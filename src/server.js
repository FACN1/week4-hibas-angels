var http = require('http');
var fs = require('fs');

var server = http.createServer(handler);
server.listen(3000, function() {
  console.log("server is listening in 3000");
});

function handler(request, response) {
  var url = request.url;

  if (url === "/") {
    response.writeHead (200, {'Content-Type':'text/html'});
    fs.readFile(__dirname + '/../public/index.html', function(error,file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  }
  else if (url === "/index.js") {
    response.writeHead (200, {'Content-Type':'text/js'});
    fs.readFile(__dirname + '/../public/index.js', function(error,file) {
      if (error) {
        console.log(error);
        return;
      };
      response.end(file);
    });
  }
  else if (url === "/style.css") {
    response.writeHead (200, {'Content-Type':'text/css'});
    fs.readFile(__dirname +  '/../public/style.css',function(error,file) {
      if (error) {
        console.log(error);
        return;
      };
      response.end(file);
    });
  }
}
