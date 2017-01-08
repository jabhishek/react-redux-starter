const express = require('express');
const passport = require('passport');
const session = require('express-session');
const auth = require('./auth.service');

module.exports = function () {
	var router = express.Router();
	router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

	router.get('/google/callback',
		passport.authenticate('google', { failureRedirect: '/login' }),
		function(req, res) {
			const token = auth.signToken(req.user.id);
			res.redirect(`/login-redirect?token=${token}`);
		});

	return router;
};
