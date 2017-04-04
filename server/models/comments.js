var db = require('../db');

exports.all = function(cb) {
    var collection = db.get().collection('comments');

    var all_data = collection.find({}, { _id: 0 });
    // console.log(all_data);
    console.log(typeof(all_data));
    // console.log(all_data.toArray()[0]);  // not working

    all_data.toArray(function(err, docs) {
        cb(err, docs);
    });
}

exports.recent = function(cb) {
    var collection = db.get().collection('comments');

    collection.find().sort({ 'date': -1 }).limit(3).toArray(function(err, docs) {
        cb(err, docs);
    })
}