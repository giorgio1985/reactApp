var http = require('http');

var port = 8000;
 console.log('Ciao, imposta la connessione alla porta numero ' + port + "\n");
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("Benvenuto nel mio server\n");
  console.log("Server running at the port = " + port + "\n");
});
server.listen(port);
