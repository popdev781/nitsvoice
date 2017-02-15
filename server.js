

var express = require('express');  //load express module
var app = express();
var appPORT = 3000

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));


app.listen(appPORT, function() {
  console.log("I\'m Listening on port ", appPORT);
});


var assert = require('assert');  // error handling  

console.log("node js is working");
