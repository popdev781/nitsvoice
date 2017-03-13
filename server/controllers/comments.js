var express = require('express');
var router = express.router;

var db = require('../db');

router.get('/all', function(req, res) {

    // comments collection from mongodb
    var collection = db.get().collection('comments');

    collection.find().toArray(function(err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ comments: docs }));
    })
});