

var express = require('express');  //load express module
var app = express(); // server
var appPORT = 3000;
var meetupController = require('./server/controllers/meetups-controller.js');
var bodyParser = require('body-parser');  // body parser to parser json request data
var MongoClient = require('mongodb').MongoClient;  // mongoclient to connect to Mongodb
var assert = require('assert');  // error handling module
var dbServer = "localhost";
var dbPORT = 27017;
var dbName = 'mean-demo';
var url = 'mongodb://' + dbServer + ':' + dbPORT + '/' +dbName;

MongoClient.connect(url, function(err, db){
	assert.equal(null, err);
	console.log('Connected to mongodb on ', url);
});

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
