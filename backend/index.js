var http = require('http');

var port = 8080;
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Ciao a tutti, sono un web server!');
  console.log("Server running at the port = " + port);
});
server.listen(port);