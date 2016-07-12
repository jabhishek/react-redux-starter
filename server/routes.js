
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = function(app) {
    app.get('*', function response(req, res) {
        res.sendFile(path.join(rootPath, 'dist/index.html'));
    });
};

