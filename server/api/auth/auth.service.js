
const authenticate = function (req, res, next) {
	if (req.isAuthenticated()) {
		console.log('is authenticated', req.user._json);
		next();
	} else {
		console.log('not authenticated - redirect to login', res);
		res.status(401).send({ message: 'Unauthenticated'});
	}
};

module.exports = {
	authenticate
};