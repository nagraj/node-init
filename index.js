
// var http = require("http");

// http.createServer(function (request, response) {

//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hi Nagraj\n');
// }).listen(3000);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:'+'3000'+'/');


var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
//app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})