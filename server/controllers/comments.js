var express = require('express');
var router = express.Router();

var Comments = require('../models/comments');

router.get('/all', function(req, res) {
    Comments.all(function(err, docs) {
        res.setHeader('Content-Type', 'application/json');

        // testing again here
        console.log(docs);
        console.log(docs[0].value);
        console.log(typeof(docs));


        res.send(JSON.stringify({ comments: docs }));
    });
});

router.get('/recent', function(req, res) {
    Comments.recent(function(err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ comments: docs }));
    });
});

module.exports = router;