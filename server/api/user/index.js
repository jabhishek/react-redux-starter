const express = require('express');
const co = require('co');
const authService = require('../auth/auth.service')

module.exports = function(db) {
	const usersCol = db.collection('users');

	const router = express.Router();

	router.get('/me', authService.authenticate, function (req, res) {
		co(function*() {
			console.log(req.user);
			const user = yield usersCol.findOne({ username: req.user.id });
			console.log(user);
			if(user) {
				res.json({
					user: user
				}).end()
			} else {
				res.status(404).json({
					message: 'Not found'
				}).end()
			}

		});
	});

	return router;
};