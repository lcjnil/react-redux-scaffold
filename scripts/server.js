require('babel-register');

var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config').development;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        color: true
    }
}));

app.use('/api', require('../src/mock'));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, '../src/public')));

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});
