const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('../../config/config');

passport.serializeUser(function(user, done) {
	console.log('serialize', user.id);
	done(null, { id: user.id });
});

passport.deserializeUser(function(obj, done) {
	console.log('deserialize', obj);
	done(null, obj);
});

passport.use(new GoogleStrategy({
		clientID: config.GOOGLE_CLIENT_ID,
		clientSecret: config.GOOGLE_CLIENT_SECRET,
		callbackURL: "http://localhost:9000/auth/google/callback"
	},
	function(accessToken, refreshToken, profile, done) {
		// User.findOrCreate({ googleId: profile.id }, function (err, user) {
		return done(null, profile);
		// });
	}
));