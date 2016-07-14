/* eslint no-console: 0 */
var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");

const isDeveloping = process.env.NODE_ENV !== 'production';
const defaultPort = 3000;
const port = isDeveloping ? defaultPort : (process.env.PORT || defaultPort);
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var rootPath = path.normalize(__dirname + '/..');
app.use(express.static(rootPath + '/dist'));

require('./routes')(app);

console.log(process.env.NODE_ENV);

app.listen(port, function onStart(err) {
    if (err) {
        console.log(err);
    }
});

