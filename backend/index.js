var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var helmet = require("helmet");
var morgan = require("morgan");

var port = 8000;
 console.log('Ciao, imposta la connessione alla porta numero ' + port + "\n");
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("Benvenuto nel mio server " + new Date() + "\n");
  console.log("Server running at the port = " + port + "\n");
});
server.listen(port);
