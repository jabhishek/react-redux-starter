const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const expressJwt = require('express-jwt');
const validateJwt = expressJwt({ secret: config.secrets.session });

const authenticate = function (req, res, next) {
	validateJwt(req, res, function() {
		if (!req.user) {
			res.status(401).send({
				message: 'Error!! Unauthorized.'
			});
		} else {
			next();
		}
	});
};

const signToken = (id) => {
	return jwt.sign({ id: id }, config.secrets.session, { expiresIn: 60 * 60 });
}

module.exports = {
	authenticate, signToken
};