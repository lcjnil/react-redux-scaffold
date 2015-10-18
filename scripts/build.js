var webpack = require('webpack');
var config = require('../webpack.config.js');

var bundler = webpack(config);

bundler.run(function(err, stats) {
  if (err) {
    console.error(err);
  }

  console.log(stats);
});
