var doRequest = require('superagent');
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


        app.get('/api/quote', function(request, response) {
            if(request.query.symbol && request.query.symbol.length > 0) {
                doRequest
                    .get('https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp?symbol=INFY')
                    .set('Accept', 'application/json')
                    .end(function(err, res){
                        const d = JSON.parse(res.text);
                        response.json(d);
                    });

            }
        });



        // All other routes should redirect to the index.html
        app.route('/*')
            .get(function (req, res) {
                res.sendFile(app.get('appPath') + '/index.html');
            });

    }).catch(function (err) {
        console.log(err.stack);
    });

};