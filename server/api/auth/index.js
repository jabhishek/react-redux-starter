var express = require('express');
var passport = require('passport');
var session = require('express-session');

module.exports = function () {
	var router = express.Router();
	router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

	router.get('/google/callback',
		passport.authenticate('google', { failureRedirect: '/login' }),
		function(req, res) {
			res.redirect('/login-redirect');
		});

	return router;
};
