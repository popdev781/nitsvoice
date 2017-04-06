var express = require('express'); //load express module
var app = express(); // server
var appPORT = 3000;
var meetupController = require('./server/controllers/meetups-controller.js');
var bodyParser = require('body-parser'); // body parser to parser json request data
var MongoClient = require('mongodb').MongoClient; // mongoclient to connect to Mongodb
var assert = require('assert'); // error handling module
var dbServer = "localhost";
var dbPORT = 27017;
var dbName = 'mean-demo';
var url = 'mongodb://' + dbServer + ':' + dbPORT + '/' + dbName;
var collectionName = 'meetups';
var db = require('./server/db');
var assert = require('assert'); // error handling  

db.connect(url, function(err) {
    if (err) {
        console.log('Unable to connect to mongodb database');
        process.exit(1);
    } else {
        app.listen(appPORT, function() {
            console.log("I\'m Listening on port ", appPORT);
        });
    }
});

app.use('/comments', require('./server/controllers/comments.js'));
// app.use('/users', require('./server/controllers/users.js'));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupController.create);

console.log("node js is working");
