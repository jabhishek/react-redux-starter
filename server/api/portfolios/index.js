var express = require('express');
var co = require('co');
var passport = require('passport');

const authenticate = function (req, res, next) {
	if (req.isAuthenticated()) {
		console.log('is authenticated', req.user._json);
		next();
	} else {
		res.status(401).json({
			error: 'Unauthorized Access'
		});
	}

};

module.exports = function (db) {
	// Get the collection
	var portfolios = db.collection('portfolios');

	var router = express.Router();
	router.get('/', authenticate, function (req, res) {
		co(function*() {
			var docs = yield portfolios.find().toArray();
			res.json({
				'portfolios': docs
			}).end()
		});
	});

	router.post('/', function (req, res) {
		co(function*() {
			const response = yield portfolios.insertOne({portfolio:req.body.portfolio});
			res.json({
				_id: response.insertedId,
				inserted: response.insertedCount
			}).end();
		}).catch(function(err) {
			res.status(400)
				.json({
				error: {
					message: err.message
				}
			});
		});
	});

	return router;
};