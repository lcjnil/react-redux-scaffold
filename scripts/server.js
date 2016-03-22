require('babel-register');

// historyApiFallback: true option doesn't work:
// https://github.com/webpack/webpack-dev-middleware/issues/46#issuecomment-164092856
var historyApiFallback = require('connect-history-api-fallback');

var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config').development;

var app = express();
var compiler = webpack(config);

app.use('/api', require('../src/mock'));
app.use(express.static(path.resolve(__dirname, '../src/public')));

app.use(historyApiFallback({
  verbose: false
}));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        color: true
    }
}));

app.use(require('webpack-hot-middleware')(compiler));


app.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});
