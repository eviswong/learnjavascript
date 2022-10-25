'use strict';

var http = require('http');

// Create a 'Http Server'
var server = http.createServer(

    function (request, response) {

        console.log(request.method + ':' + request.url);
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end('<h1>Hello world!</h1>');

    }
);

// Listen to port 8080
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080');