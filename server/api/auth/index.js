const express = require('express');
const passport = require('passport');
const session = require('express-session');
const auth = require('./auth.service');
var co = require('co');

module.exports = function (db) {
	require('./passportInit');

	var router = express.Router();
	router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

	router.get('/google/callback',
		passport.authenticate('google', { failureRedirect: '/login' }),
		function(req, res) {
			co(function*() {
				const usersCol = db.collection('users');
				const user = yield usersCol.findOne({ googleId: req.user.id });

				if(!user) {
					yield usersCol.insertOne({
						provider: 'google',
						username: req.user.id,
						name: req.user.displayName,
						role: 'user',
						userData: req.user._json
					})
				}

				const token = auth.signToken(req.user.id);
				// console.log(req.user);
				res.redirect(`/login-redirect?token=${token}`);
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
