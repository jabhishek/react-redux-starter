var express = require('express');
var co = require('co');

module.exports = function (db) {
    // Get the collection
    var col = db.collection('kids');

    var router = express.Router();
    router.get('/', function (req, res) {
        co(function*() {
            var docs = yield col.find().toArray();
            res.json({
                'kids': docs
            }).end()
        });
    });

    router.post('/', function (req, res) {
        co(function*() {
            const response = yield db.collection('test').insertOne({user:req.body.user});
            res.json({
                inserted: response.insertedCount
            }).end();
        });
    });

    return router;
};