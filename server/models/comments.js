var db = require('../db');

exports.all = function(callback) {
    var collection = db.get().collection('comments');

    var all_data = collection.find({}, { _id: 0 });
    // console.log(typeof(all_data));

    all_data.toArray(function(err, docs) {
        callback(err, docs);
    });
}

exports.recent = function(cb) {
    var collection = db.get().collection('comments');

    collection.find().sort({ 'date': -1 }).limit(3).toArray(function(err, docs) {
        cb(err, docs);
    })
}