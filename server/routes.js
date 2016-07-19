var MongoClient = require('mongodb').MongoClient,
    co = require('co'),
    assert = require('assert');

var kids = require('./api/kids/index');
var trades = require('./api/trades/index');

// Connection URL
var url = require('./config/config').mongoUrl;

module.exports = function (app) {
    co(function*() {
        // Connection URL
        var db = yield MongoClient.connect(url);

        // api routes
        app.use('/api/kids', kids(db));
        app.use('/api/trades', trades(db));

        // All other routes should redirect to the index.html
        app.route('/*')
            .get(function (req, res) {
                res.sendFile(app.get('appPath') + '/index.html');
            });

    }).catch(function (err) {
        console.log(err.stack);
    });

};