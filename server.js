

var express = require('express');  //load express module
var app = express();
var meetupController = require('./server/controllers/meetups-controller.js');
var bodyParser = require('body-parser');

var appPORT = 3000;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupController.create);

app.listen(appPORT, function() {
  console.log("I\'m Listening on port ", appPORT);
});


var assert = require('assert');  // error handling  

console.log("node js is working");
