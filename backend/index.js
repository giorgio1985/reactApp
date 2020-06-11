var http = require('http');

var port = 8000;
 console.log('Ciao, imposta la connessione alla porta numero ' + port);
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("Benvenuto nel mio server");
  console.log("Server running at the port = " + port);
});
server.listen(port);
