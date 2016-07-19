var express = require('express');
var co = require('co');

module.exports = function (db) {
    // Get the collection
    var col = db.collection('kids');

    var router = express.Router();
    router.get('/kids', function (req, res) {
        co(function*() {
            var docs = yield col.find().toArray();
            res.json({
                'kids': docs
            }).end()
        });
    });

    return router;
};