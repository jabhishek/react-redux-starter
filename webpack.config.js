var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [path.resolve(__dirname, "src")],
                loader: 'babel'
            }
        ]
    }
};