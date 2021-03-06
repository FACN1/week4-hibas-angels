var http = require('http');
var fs = require('fs');

var wordPackage = require('word-list-json');

var helpers = require('./helpers');

var NUM_RESULTS = 10;

function handler(request, response) {
  var url = request.url;

  if (url === "/") {
    response.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile(__dirname + '/../public/index.html', function(error,file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  }
  else if (url === "/index.js") {
    response.writeHead(200, {'Content-Type':'text/js'});
    fs.readFile(__dirname + '/../public/index.js', function(error,file) {
      if (error) {
        console.log(error);
        return;
      };
      response.end(file);
    });
  }
  else if (url === "/style.css") {
    response.writeHead(200, {'Content-Type':'text/css'});
    fs.readFile(__dirname +  '/../public/style.css',function(error,file) {
      if (error) {
        console.log(error);
        return;
      };
      response.end(file);
    });
  }
  else if (url === "/pics/angel.png") {
    response.writeHead(200, {'Content-Type':'image/png'});
    fs.readFile(__dirname +  '/../pics/angel.png',function(error,file) {
      if (error) {
        console.log(error);
        return;
      };
      response.end(file);
    });
  }
  else if (url.includes("/search")) {
    // we want the value after equals sign
    var searchTerm = url.split('=')[1];
    // the result of the client search (its an array of words)
    var wordArray = helpers.getWords(searchTerm, wordPackage, NUM_RESULTS);
    // we send the response
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end(JSON.stringify(wordArray));
  }
  else {
    response.writeHead(404, {'Content-Type':'text/plain'});
    response.end('the page not found');
  }
}

var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("server is listening in 3000");
});
