var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var serveStatic = require('serve-static');

var port = process.env.PORT || 9000;

var rootPath = path.normalize(__dirname + '/..');
var appPath = path.join(rootPath, 'dist');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(appPath);
app.use(serveStatic(appPath));
app.set("appPath", appPath);
app.use(passport.initialize());

require('./passportInit');

// setup routes
require("./routes")(app);

app.listen(port, function() {
    console.log('Listening on port ' +  port + " in mode: " + process.env.NODE_ENV);
});

// Expose app
module.exports = app;