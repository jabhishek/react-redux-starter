var doRequest = require('superagent');

var MongoClient = require('mongodb').MongoClient,
    co = require('co'),
    assert = require('assert');

var trades = require('./api/trades');
var portfolios = require('./api/portfolios');
var users = require('./api/user');

// Connection URL
var url = require('./config/config').mongoUrl;

module.exports = function (app) {
    co(function*() {
        // Connection URL
        const db = yield MongoClient.connect(url);

        // api routes
        app.use('/api/trades', trades(db));
        app.use('/api/portfolios', portfolios(db));
        app.use('/api/user', users(db));

        app.use('/auth', require('./api/auth')(db));

        app.get('/api/quote', function(request, response) {
            if(request.query.symbol && request.query.symbol.length > 0) {
                doRequest
                    .get(`https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp?symbol=${request.query.symbol}`)
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