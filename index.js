
var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi everybody!');
});
server.listen(8080);


// var express = require('express')
//var app = express()

// app.set('port', (process.env.PORT || 5000))
// //app.use(express.static(__dirname + '/public'))

// app.get('/', function(request, response) {
//   response.send('Hello World!')
// })

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })